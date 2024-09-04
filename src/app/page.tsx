'use client';

import * as React from 'react';
import { Box } from '@mui/material';
<<<<<<< HEAD
import ABasicInput from '@/conponents/atom/Input/Basic/ABasicInput';
import AText from '@/conponents/atom/Text/AText';
import ADatesSelector from '@/conponents/molecules/Select/ADateSelector';
import AMonthSelector from '@/conponents/molecules/Select/AMonthSelector';
import TextualControlGroup from '@/conponents/molecules/Text/TextualControlGroup';
import AVariableModifyInputBox from '@/conponents/molecules/Input/AVariableModifyInputBox';
import ACustomButton from '@/conponents/atom/Button/ACustomButton';
import ACheckbox from '@/conponents/atom/CheckBox/ACheckbox';
=======
>>>>>>> 88b07db848917b9713edf084847db41c18118b4c

const Home = () => {
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
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>메인페이지입니다.</Box>
      </Box>
    </Box>
  );
};

export default Home;
