'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import LabelTypingInput from '@/app/ui/kyh/LabelTypingInput';
import LabelDrop from '@/app/ui/kyh/LabelDrop';
import TwoButtons from '@/app/ui/kyh/TwoButtons';
import LabelDate from '@/app/ui/kyh/LabelDate';

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
          <LabelDate labeltext="예약일시" />
          <LabelTypingInput labeltext="고객성함" />
          <LabelTypingInput labeltext="연락처" />
          <LabelTypingInput labeltext="방문주소" />
          <LabelTypingInput labeltext="특이사항" />
          <LabelDrop labeltext="결제방식" droptype="APayment" />
          <LabelDrop labeltext="증빙서류" droptype="AEvidentialDocument" borderBottom="0" />
          <TwoButtons />
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
