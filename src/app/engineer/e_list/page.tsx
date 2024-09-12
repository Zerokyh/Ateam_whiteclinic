'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import ACard from '@/components/atom/Card/ACard';
import { WorkerInfo, WorkerProps } from '@/constants/Workers';
import Table from '@/components/organism/yh/Table';

const Page = () => {
  const [selectedWorker, setSelectedWorker] = useState<WorkerProps | null>(null);

  const handleCardClick = (worker: WorkerProps) => {
    setSelectedWorker(worker);
  };

  const handleWageAmountChange = (newAmount: number) => {
    console.log('New wage amount:', newAmount);
  };

  const calculateWageAmount = (worker: WorkerProps): number => {
    const totalWage = worker.datePay?.reduce((sum, dp) => sum + parseInt(dp.pay), 0) || 0;
    const percentageRate = parseInt(worker.percent) / 100;
    return Math.round(totalWage * percentageRate);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
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
        <Box
          sx={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '4px' }}
        >
          <h2>{selectedWorker.name}의 정보</h2>
          <Table
            wage={
              selectedWorker.datePay?.map((dp) => ({ date: dp.date, amount: parseInt(dp.pay) })) ||
              []
            }
            totalWage={selectedWorker.datePay?.reduce((sum, dp) => sum + parseInt(dp.pay), 0) || 0}
            wageRate={selectedWorker.percent}
            wageAmount={calculateWageAmount(selectedWorker)}
            paymentDay={selectedWorker.payday}
            onWageAmountChange={handleWageAmountChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default Page;
