'use client';

import ACard from '@/components/atom/Card/ACard';
import { WorkerWage } from '@/constants/Workers';
import { Box } from '@mui/material';

const Page = () => {
  const handleClick = () => {
    console.log('클릭');
  };

  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      {Object.entries(WorkerWage).map(([key, worker]) => (
        <ACard key={key} worker={worker} onClick={handleClick} />
      ))}
    </Box>
  );
};

export default Page;
