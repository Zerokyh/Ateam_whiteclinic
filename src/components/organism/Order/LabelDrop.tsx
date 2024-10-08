import * as React from 'react';
import { Box } from '@mui/material';

import ADaySelector from '@/components/molecules/Select/ADaySelector';
import APercent from '@/components/molecules/Select/APercent';
import APayment from '@/components/molecules/Select/APayment';
import AEvidentialDocument from '@/components/molecules/Select/AEvidentialDocument';
import AText from '@/components/atom/Text/AText';
import AMonthSelector from '@/components/molecules/Select/delete/AMonthSelector';
import ADatesSelector from '@/components/molecules/Select/delete/ADateSelector';

const components = {
  AMonthSelector,
  ADatesSelector,
  ADaySelector,
  APercent,
  APayment,
  AEvidentialDocument,
};

export type dropDownListType = keyof typeof components;

type LabelDropProps = {
  labeltext: string;
  droptype: dropDownListType;
  borderBottom?: string;
  borderRight?: string;
};

const LabelDrop = ({
  labeltext,
  droptype,
  borderBottom = '1px solid #7F7F7F',
  borderRight = '1px solid #7F7F7F',
}: LabelDropProps) => {
  const DropComponent = components[droptype];

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          width: 110,
          height: 56,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#F2F2F2',
          borderRight: { borderRight },
          borderBottom: { borderBottom },
        }}
      >
        <AText text={labeltext} />
      </Box>
      <Box
        sx={{
          width: '462px',
          height: 56,
          display: 'flex',
          borderBottom: { borderBottom },
          p: 1,
        }}
      >
        <DropComponent />
      </Box>
    </Box>
  );
};

export default LabelDrop;
