'use client';

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import ACard from '@/components/atom/Card/ACard';
import { WorkerInfo, WorkerProps } from '@/constants/Workers';
import CenteredLayout from '@/styles/layout/CenterLayout';
import AFixedInput from '@/components/atom/Input/FixedInput/AFixedInput';
import AButton from '@/components/atom/Button/AButton';
import AFooter, { FooterItem } from '@/components/organism/yh/datagrid/AFooter';
import ADataGrid from '@/components/organism/yh/datagrid/ADataGrid';
import ACheckbox from '@/components/atom/CheckBox/ACheckbox';

const Page = () => {
  const [selectedWorker, setSelectedWorker] = useState<WorkerProps | null>(null);
  const [rows, setRows] = useState<any[]>([]);
  const [filter, setFilter] = useState('');

  const handleCardClick = (worker: WorkerProps) => {
    setSelectedWorker(worker);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    if (selectedWorker && selectedWorker.datePay) {
      const newRows = selectedWorker.datePay.map((dp, index) => ({
        id: index,
        date: dp.date,
        pay: parseInt(dp.pay),
      }));
      setRows(newRows);
    }
  }, [selectedWorker]);

  const columns: GridColDef[] = [
    { field: 'date', headerName: '날짜', width: 150 },
    { field: 'pay', headerName: '급여', width: 150, type: 'number' },
  ];

  const calculateWageAmount = (worker: WorkerProps): number => {
    const totalWage = worker.datePay?.reduce((sum, dp) => sum + parseInt(dp.pay), 0) || 0;
    const percentageRate = parseInt(worker.percent) / 100;
    return Math.round(totalWage * percentageRate);
  };

  const filteredWorkers = Object.entries(WorkerInfo).filter(
    ([_, worker]) =>
      worker.name.toLowerCase().includes(filter.toLowerCase()) || worker.available.includes(filter)
  );

  const submit = () => {
    console.log('제출');
  };

  const getFooterData = (worker: WorkerProps): FooterItem[] => {
    const totalWage = worker.datePay?.reduce((sum, dp) => sum + parseInt(dp.pay), 0) || 0;
    const wageAmount = calculateWageAmount(worker);

    return [
      { label: '합계 급여', value: `${totalWage.toLocaleString()}원` },
      { label: '수당률', value: worker.percent },
      { label: '수당 금액', value: `${wageAmount.toLocaleString()}원` },
      { label: '지급일', value: worker.payday },
      { label: '전화번호', value: worker.tel },
      { label: '주소', value: worker.address },
      { label: '가능 품목', value: worker.available.join(', ') },
      {
        label: '지급 여부',
        value: worker.ispaid,
        renderValue: (value) => (
          <ACheckbox
            isChecked={value as boolean}
            onChange={(event) => {
              // 여기에 체크박스 상태 변경 로직을 추가합니다.
              console.log(`클릭`);
            }}
          />
        ),
      },
    ];
  };

  return (
    <CenteredLayout>
      <AFixedInput
        placeholder="이름, 주소 또는 전화번호로 검색"
        value={filter}
        onChange={handleFilterChange}
        width={300}
        sx={{ mb: 2 }}
        inputHeightSize="medium"
      />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '20px',
          overflowY: 'auto',
          height: '500px',
        }}
      >
        {filteredWorkers.map(([key, worker]) => (
          <ACard
            key={key}
            name={worker.name}
            tel={worker.tel}
            address={worker.address}
            available={worker.available.join(', ')}
            remark=""
            onClick={() => handleCardClick(worker)}
          />
        ))}
      </Box>

      {selectedWorker && (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          <Box sx={{ width: '500px' }}>
            <ADataGrid
              rows={rows}
              columns={columns}
              title={`${selectedWorker.name}의 정보`}
              height={400}
              width="100%"
            />
          </Box>
          <Box sx={{ width: '200px', display: 'flex', alignItems: 'center' }}>
            <AFooter data={getFooterData(selectedWorker)} />
          </Box>
          <AButton text="등록" onClick={submit} />
        </Box>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}></Box>
    </CenteredLayout>
  );
};

export default Page;
