import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { WorkerProps } from '@/constants/Workers';

type AFooterProps = {
  selectedWorker: WorkerProps;
  calculateWageAmount: (worker: WorkerProps) => number;
};

const AFooter = ({ selectedWorker, calculateWageAmount }: AFooterProps) => {
  const totalWage = selectedWorker.datePay?.reduce((sum, dp) => sum + parseInt(dp.pay), 0) || 0;
  const wageAmount = calculateWageAmount(selectedWorker);

  const footerData = [
    { label: '총 급여', value: `${totalWage.toLocaleString()}원`, xs: 6, md: 3 },
    { label: '급여 비율', value: `${selectedWorker.percent}%`, xs: 6, md: 3 },
    { label: '급여 금액', value: `${wageAmount.toLocaleString()}원`, xs: 6, md: 3 },
    { label: '지급일', value: selectedWorker.payday, xs: 6, md: 3 },
    { label: '전화번호', value: selectedWorker.tel, xs: 6, md: 3 },
    { label: '주소', value: selectedWorker.address, xs: 6, md: 3 },
    { label: '가능 요일', value: selectedWorker.available.join(', '), xs: 12, md: 6 },
  ];

  return (
    <Box
      sx={{
        padding: '20px',
        borderTop: '1px solid gray',

        '& .MuiDataGrid-virtualScroller': {
          overflowY: 'auto',
        },
        '& .MuiDataGrid-footerContainer': {
          display: 'block',
          border: 'none',
        },
      }}
    >
      <Grid container spacing={2}>
        {footerData.map((item, index) => (
          <Grid item xs={item.xs} md={item.md} key={index}>
            <Typography>
              <strong>{item.label}:</strong> {item.value}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AFooter;
