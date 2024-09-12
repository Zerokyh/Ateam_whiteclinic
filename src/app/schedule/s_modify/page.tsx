'use client';

import AButton from '@/components/atom/Button/AButton';
import ADatesSelector from '@/components/molecules/Select/ADateSelector';
import { Box } from '@mui/material';
import React, { useState } from 'react';

const Page = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <AButton text="급여사항확인" color="default" size="medium" />
      <AButton text="급여사항확인" color="primary" size="large" />
      <AButton text="급여사항확인" color="secondary" size="full" />
      <ADatesSelector></ADatesSelector>
      <Box sx={{ width: '1000px' }}></Box>
    </>
  );
};
export default Page;
