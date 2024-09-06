import React from 'react';
import { Box } from '@mui/material';
import LabelCheckBox, { LabelCheckBoxProps } from './LabelCheckBox';
import { TextProps } from 'recharts';
import ABasicInput, { ABasicInputProps } from '@/conponents/atom/Input/Basic/ABasicInput';
import AText from '@/conponents/atom/Text/AText';
import ACustomButton from '@/conponents/atom/Button/ACustomButton';

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
    <Box
      sx={{ maxWidth: '1000px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '4px' }}
    >
      {Object.entries(engneerObject).map(([key, value], index) => (
        <Box
          key={key}
          sx={{
            display: 'flex',
            alignItems: 'stretch',
            borderBottom: '1px solid #ccc',
          }}
        >
          <Box
            sx={{
              width: '100px',
              padding: '16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: '#F2F2F2',
              borderRight: '1px solid #ccc',
            }}
          >
            <AText {...textProps} text={value.title} />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              padding: '16px',
            }}
          >
            {value.type === 'input' ? (
              <ABasicInput {...inputProps} label={value.title} />
            ) : (
              <LabelCheckBox {...checkBoxProps} />
            )}
          </Box>
        </Box>
      ))}
      <Box
        sx={{
          display: 'flex',
          padding: '16px',
          gap: 2,
        }}
      >
        <ACustomButton text="취소" variant="outlined" color="default" size="medium" />
        <ACustomButton text="등록" variant="contained" color="primary" size="medium" />
      </Box>
    </Box>
  );
};

export default EnginnerLabel;
