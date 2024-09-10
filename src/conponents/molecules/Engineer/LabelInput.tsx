import React from 'react';
import { Box } from '@mui/material';
import LabelCheckBox, { LabelCheckBoxProps } from './LabelCheckBox';
import { TextProps } from 'recharts';
import ABasicInput, { ABasicInputProps } from '@/conponents/atom/Input/Basic/ABasicInput';
import AText from '@/conponents/atom/Text/AText';
import TwoButtons from '../Button/TwoButton';
import { EngineerRegisterObjectType } from '@/constants/Engineer';

type EngineerRegisterProps = {
  textProps: TextProps;
  inputProps: ABasicInputProps;
  checkBoxProps: LabelCheckBoxProps;
  engneerObject: EngineerRegisterObjectType;
};

const EnginnerLabel: React.FC<EngineerRegisterProps> = ({
  checkBoxProps,
  engneerObject,
  inputProps,
  textProps,
}) => {
  return (
    <>
      <Box
        sx={{
          maxWidth: '800px',
          margin: '0 auto',
          border: '1px solid #ccc',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        {Object.entries(engneerObject).map(([key, value], index) => (
          <Box
            key={key}
            sx={{
              display: 'flex',
              alignItems: 'stretch',
              borderBottom: '1px solid #ccc',
              minHeight: '56px',
            }}
          >
            <Box
              sx={{
                width: '120px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#F2F2F2',
                borderRight: '1px solid #ccc',
                padding: '8px',
              }}
            >
              <AText {...textProps} text={value.title} />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                padding: '8px 16px',
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
    </>
  );
};

export default EnginnerLabel;
