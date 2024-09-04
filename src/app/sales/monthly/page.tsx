'use client';

import AMonthPlan from '@/conponents/organism/Select/AMonthPlan';
import { Box } from '@mui/material';

const Page = () => {
  return (
    <Box
      sx={{
        height: 'calc(100vh - 112px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: 'calc(100vw - 340px)',
                height: 'calc(100vh - 112px)',
                bgcolor: '#f2f2f2',
              }}
            >
              <Box>
                <AMonthPlan />
              </Box>
              <Box></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
