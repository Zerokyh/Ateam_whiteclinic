'use client';

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { WorkerInfo, WorkerProps } from '@/constants/Workers';
import CenteredLayout from '@/styles/layout/CenterLayout';
import AButton from '@/components/atom/Button/AButton';
import ADataGrid from '@/components/molecules/datagrid/ADataGrid';
import { getFooterData } from '@/constants/yh/WorkerFooterData';
import AFooter from '@/components/molecules/datagrid/AFooter';
import { workerColumns } from '@/constants/yh/ColumnData';
import CardFilter from '@/components/organism/yh/CardFilter';
import { YStyle } from '@/styles/yh';
import { sizes } from '@/styles/sizes';

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

  const filteredWorkers = Object.entries(WorkerInfo).filter(
    ([_, worker]) =>
      worker.name.toLowerCase().includes(filter.toLowerCase()) || worker.available.includes(filter)
  );

  const submit = () => {
    console.log('제출');
  };

  const workerDataProps = {
    rows,
    columns: workerColumns,
    title: `${selectedWorker?.name}의 정보`,
    height: 400,
    width: '100%',
  };

  const cardFilterProps = {
    data: filteredWorkers,
    filter: filter,
    onFilterChange: handleFilterChange,
    onItemClick: handleCardClick,
  };

  return (
    <CenteredLayout>
      <CardFilter {...cardFilterProps} />

      {selectedWorker && (
        <Box sx={YStyle.one}>
          <Box sx={{ width: sizes.width.xxlarge }}>
            <ADataGrid {...workerDataProps} />
          </Box>
          <Box sx={YStyle.two}>
            <AFooter data={getFooterData(selectedWorker)} />
          </Box>
          <AButton text="등록" onClick={submit} />
        </Box>
      )}
    </CenteredLayout>
  );
};

export default Page;
