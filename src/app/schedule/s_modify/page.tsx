'use client';

import ACustomButton from '@/components/atom/Button/ACustomButton';
import ABasicInput from '@/components/atom/Input/Basic/ABasicInput';
import AVOutlinedInput from '@/components/atom/Input/VariableInput/AVOutlinedInput';
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
      <ACustomButton text="급여사항확인" color="default" size="medium" />
      <ACustomButton text="급여사항확인" color="primary" size="large" />
      <ACustomButton text="급여사항확인" color="secondary" size="full" />
      <ADatesSelector></ADatesSelector>
      <ABasicInput label="테스트" multiline={true}></ABasicInput>
      <Box sx={{ width: '1000px' }}>
        <AVOutlinedInput
          type=""
          value={inputValue}
          onChange={handleInputChange}
          placeholder="직접수정"
        />
      </Box>
    </>
  );
};
export default Page;
