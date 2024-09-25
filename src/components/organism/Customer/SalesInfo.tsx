'use client';

import TwoButtons from '@/components/molecules/Button/TwoButton';
import InfoForm from '@/components/molecules/Form/InfoForm';
import { salesInfoFormData } from '@/constants/salesInfoFormData';
import { Box } from '@mui/material';
import { useState } from 'react';

const SalesInfo = () => {

  return (
    <Box sx={{}}>
      <InfoForm titledformcontrolprops={salesInfoFormData} />
      <TwoButtons
        leftButton={{ text: '취소', size: 'full' }}
        rightButton={{ text: '등록', color: 'primary', size: 'full' }}
      />
    </Box>
  );
};

export default SalesInfo;
