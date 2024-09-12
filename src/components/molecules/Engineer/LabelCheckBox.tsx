'use client';

import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { EngineerWashingMachineCategory } from '@/constants/Engineer';
import ACheckbox, { CheckboxProps } from '@/components/atom/CheckBox/ACheckbox';
import AText, { TextProps } from '@/components/atom/Text/AText';

export type LabelCheckBoxProps = {
  checkBoxProps?: Omit<CheckboxProps, 'isCheck' | 'onChange' | 'textprops'>;
  textProps: TextProps;
};

const LabelCheckBox: React.FC<LabelCheckBoxProps> = ({ checkBoxProps, textProps }) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedKeys((prev) => {
      const newKeys = event.target.checked ? [...prev, key] : prev.filter((k) => k !== key);
      if (newKeys.length > 0) {
        console.log(`선택된 항목: ${newKeys.join(', ')}`);
      } else {
        console.log('선택된 항목이 없습니다.');
      }
      return newKeys;
    });
  };

  return (
    <>
      <Box sx={{ display: 'flex', width: '80%', alignItems: 'center' }}>
        <Grid container spacing={0}>
          {EngineerWashingMachineCategory.map((v) => (
            <Grid item xs={2} key={v} padding={'5px'}>
              <ACheckbox
                isChecked={selectedKeys.includes(v)}
                onChange={handleChange(v)}
                textprops={{ text: v }}
                {...checkBoxProps}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default LabelCheckBox;
