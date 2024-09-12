import React, { useState } from 'react';
import { Box } from '@mui/material';
import TwoButtons from '../Button/TwoButton';
import LabelInput from './LabelInput';
import LabelCheckBox from './LabelCheckBox';

const Register = () => {
  return (
    <Box
      sx={{
        maxWidth: '800px',
        margin: '0 auto',
        border: '1px solid #ccc',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    >
      <LabelInput value="죽어" label="기사성함" isInvisible={false} />
      <LabelInput label="연락처" isInvisible={false} />
      <LabelInput label="거주지역" isInvisible={false} />
      <LabelCheckBox textProps={{ text: '가능품목' }} />
      <LabelInput label="특이사항" isInvisible={false} />
      <TwoButtons
        leftButton={{
          text: '취소',
          variant: 'contained',
          color: 'default',
          size: 'full',
        }}
        rightButton={{
          text: '등록',
          variant: 'contained',
          color: 'primary',
          size: 'full',
        }}
      />
    </Box>
  );
};

export default Register;
