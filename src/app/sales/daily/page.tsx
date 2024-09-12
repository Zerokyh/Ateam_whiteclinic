'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import OrderForm from '@/components/organism/Order/OrderForm';
import TwoButtons from '@/components/molecules/Button/TwoButton';

const containerStyle = {
  height: 'calc(100vh - 112px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const innerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const Page = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={innerContainerStyle}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <OrderForm />
          <TwoButtons
            leftButton={{ text: '취소', variant: 'text', color: 'default', size: 'full' }}
            rightButton={{ text: '등록', variant: 'contained', color: 'primary', size: 'full' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
