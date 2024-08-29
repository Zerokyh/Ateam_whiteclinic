'use client';

import * as React from 'react';
import { Box, Typography } from '@mui/material';
import AVariableModifyInputBox from '@/conponents/atom/Input/AVariableModifyInputBox';
import AFixedModifyInputBox from '@/conponents/atom/Input/AFixedModifyInputBox';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Box>
        <Typography>Fixed Input - SingleLine</Typography>
        <AFixedModifyInputBox />
        <AFixedModifyInputBox inputVariant="filled" />
        <AFixedModifyInputBox inputVariant="standard" />
      </Box>
      <Box>
        <Typography>Fixed Input - MultiLine</Typography>
        <AFixedModifyInputBox isMultiline={true} />
        <AFixedModifyInputBox inputVariant="filled" isMultiline={true} />
        <AFixedModifyInputBox inputVariant="standard" isMultiline={true} />
      </Box>
      <Box>
        <Typography>Variable Input - SingleLine</Typography>
        <AVariableModifyInputBox />
        <AVariableModifyInputBox inputVariant="filled" />
        <AVariableModifyInputBox inputVariant="standard" />
      </Box>
      <Box>
        <Typography>Variable Input - MultiLine</Typography>
        <AVariableModifyInputBox isMultiline={true} />
        <AVariableModifyInputBox inputVariant="filled" isMultiline={true} />
        <AVariableModifyInputBox inputVariant="standard" isMultiline={true} />
      </Box>
    </main>
  );
};

export default Home;
