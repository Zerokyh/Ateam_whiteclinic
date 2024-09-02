import React from 'react';
import { Box, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import LabelCheckBox, { LabelCheckBoxProps } from './LabelCheckBox';
import { TextProps } from 'recharts';
import ABasicInput, { ABasicInputProps } from '@/conponents/atom/Input/Basic/ABasicInput';
import AText from '@/conponents/atom/Text/AText';

type EngineerRegisterProps = {
  textProps: TextProps;
  inputProps: ABasicInputProps;
  checkBoxProps: LabelCheckBoxProps;
  engneerObject: {
    [key: string]: {
      title: string;
      type: 'input' | 'checkbox';
    };
  };
};

const EnginnerLabel: React.FC<EngineerRegisterProps> = ({
  checkBoxProps,
  engneerObject,
  inputProps,
  textProps,
}) => {
  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
      {Object.entries(engneerObject).map(([key, value], index) => (
        <Box key={key} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: 110,
              height: value.type === 'checkbox' ? 143 : 56,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: '#F2F2F2',
              borderRight: '1px solid #7F7F7F',
              borderBottom: '1px solid #7F7F7F',
            }}
          >
            <AText {...textProps} text={value.title} />
          </Box>
          <Box
            sx={{
              width: 1500,
              display: 'flex',
              p: 1,
              gap: 1,
              borderBottom: '1px solid #7F7F7F',
            }}
          >
            {value.type === 'input' ? (
              <>
                <ABasicInput {...inputProps} label={value.title} />
              </>
            ) : (
              <LabelCheckBox {...checkBoxProps} />
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default EnginnerLabel;
