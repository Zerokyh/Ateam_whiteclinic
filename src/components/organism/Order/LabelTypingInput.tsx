import * as React from 'react';
import AText from '@/components/atom/Text/AText';
import { Box } from '@mui/material';
import AVariableInput from '@/components/atom/Input/VariableInput/AVariableInput';

type LabeledTextInputProps = {
  labeltext: string;
  borderBottom?: string;
  borderRight?: string;
};

const LabeledTextInput = ({
  labeltext,
  borderBottom = '1px solid #7F7F7F',
  borderRight = '1px solid #7F7F7F',
}: LabeledTextInputProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          width: 110,
          height: 57,
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
          display: 'flex',
          borderBottom: { borderBottom },
          width: '462px',
        }}
      >
        <AVariableInput placeholder="직접수정" />
      </Box>
    </Box>
  );
};

export default LabeledTextInput;
