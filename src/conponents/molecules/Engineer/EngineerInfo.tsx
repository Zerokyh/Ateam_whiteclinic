'use client';

import React from 'react';
import { Box } from '@mui/material';
import { TextProps } from 'recharts';

import { useEngineerLabel } from '@/constants/EngineerEffect';
import AText from '@/conponents/atom/Text/AText';
import ACustomButton from '@/conponents/atom/Button/ACustomButton';
import LabelCheckBox, { LabelCheckBoxProps } from '@/conponents/molecules/Engineer/LabelCheckBox';
import AVOutlinedInput, { AVOutlinedInputProps } from './Input';

type EngineerRegisterProps = {
  textProps: TextProps;
  inputProps: Omit<AVOutlinedInputProps, 'value' | 'onChange'>;
  checkBoxProps: LabelCheckBoxProps;
  engneerObject: {
    [key: string]: {
      title: string;
      type: 'input' | 'checkbox';
    };
  };
};

const EngineerLabel: React.FC<EngineerRegisterProps> = ({
  engneerObject,
  inputProps,
  textProps,
  checkBoxProps,
}) => {
  const { localData, handleInputChange, handleSkillChange, handleSave, handleCancel } =
    useEngineerLabel();

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
              <AVOutlinedInput
                {...inputProps}
                placeholder={value.title}
                value={localData ? (localData[key as keyof typeof localData] as string) : ''}
                onValueChange={(newValue) => handleInputChange(key, newValue)}
              />
            ) : (
              <LabelCheckBox
                {...checkBoxProps}
                option={checkBoxProps.option}
                checkBoxProps={{
                  ...checkBoxProps.checkBoxProps,
                  isCheck: (items: string) => localData?.items.includes(items) || false,
                  onChange: (items: string) => () => handleSkillChange(items),
                }}
              />
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
        <ACustomButton
          text="취소"
          variant="outlined"
          color="default"
          size="medium"
          onClick={handleCancel}
        />
        <ACustomButton
          text="등록"
          variant="contained"
          color="primary"
          size="medium"
          onClick={handleSave}
        />
      </Box>
    </Box>
  );
};

export default EngineerLabel;
