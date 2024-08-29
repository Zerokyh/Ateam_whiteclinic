'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import AVariableModifyInputBox from '@/conponents/atom/Input/AVariableModifyInputBox';
import AFixedModifyInputBox from '@/conponents/atom/Input/AFixedModifyInputBox';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Box>
        <AFixedModifyInputBox />
        <AVariableModifyInputBox />
      </Box>
    </main>
  );
};

export default Home;
