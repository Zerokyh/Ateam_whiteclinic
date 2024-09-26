'use client';

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import ACard from '@/components/atom/Card/ACard';
import { WorkerInfo, WorkerProps } from '@/constants/Workers';
import CenteredLayout from '@/styles/layout/CenterLayout';
import AFooter from '@/components/organism/yh/datagrid/AFooter';


const Page = () => {
  const [selectedWorker, setSelectedWorker] = useState<WorkerProps | null>(null);
  const [rows, setRows] = useState<any[]>([]);

  const handleCardClick = (worker: WorkerProps) => {
    setSelectedWorker(worker);
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

  return (
    <CenteredLayout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {Object.entries(WorkerInfo).map(([key, worker]) => (
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
        <Box sx={{ height: 400, width: '50%', marginTop: '20px' }}>
          <h2>{selectedWorker.name}의 정보</h2>
          <DataGrid
            rows={rows}
            columns={columns}
            disableRowSelectionOnClick
            slots={{
              toolbar: GridToolbar,
              footer: () => (
                <AFooter
                  selectedWorker={selectedWorker}
                  calculateWageAmount={calculateWageAmount}
                />
              ),
            }}
            hideFooterPagination
          />
        </Box>
      )}
    </CenteredLayout>
  );
};

export default Page;
