'use client';

import React from 'react';
import { Box } from '@mui/material';
import LabelCheckBox, { LabelCheckBoxProps } from './LabelCheckBox';
import { TextProps } from 'recharts';
import AText from '@/conponents/atom/Text/AText';
import ACustomButton from '@/conponents/atom/Button/ACustomButton';

import useEngineerData from '@/constants/EngineerEffect';
import AVOutlinedInput, { AVOutlinedInputProps } from './Input';

type EngineerRegisterProps = {
  textProps: TextProps;
  inputProps: AVOutlinedInputProps;
  checkBoxProps: LabelCheckBoxProps;
  engneerObject: {
    [key: string]: {
      title: string;
      type: 'input' | 'checkbox';
    };
  };
};

const EngineerLabel: React.FC<EngineerRegisterProps> = ({
  checkBoxProps,
  engneerObject,
  inputProps,
  textProps,
}) => {
  const { engineerData, customSkill, handleCustomSkillChange, handleCustomSkillAdd } =
    useEngineerData();

  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
      {Object.entries(engneerObject).map(([key, value]) => (
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
              <AVOutlinedInput
                {...inputProps}
                placeholder={value.title}
                value={
                  engineerData && key !== 'items'
                    ? (engineerData[key as keyof typeof engineerData] as string)
                    : ''
                }
                onChange={() => console.log(`${key} changed`)}
              />
            ) : (
              <LabelCheckBox {...checkBoxProps} option={engineerData?.items || []} />
            )}
          </Box>
        </Box>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, gap: 2 }}>
        <ACustomButton text="취소" variant="outlined" color="default" size="medium" />
        <ACustomButton text="등록" variant="contained" color="primary" size="medium" />
      </Box>
    </Box>
  );
};

export default EngineerLabel;
