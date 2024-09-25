'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import OneCheckbox, { OneCheckboxProps } from '../checkbox/OneCheckbox';
import ADropdown, { ADropdownProps } from '@/components/atom/DropdownBox/ADropdown';
import { productCategories } from '@/constants/productCategory';

export type CheckboxDropdownSelectorProps = {
  onecheckboxprops: OneCheckboxProps;
  dropdownprops?: ADropdownProps;
};

const CheckboxDropdownSelector = ({
  onecheckboxprops,
  dropdownprops,
}: CheckboxDropdownSelectorProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<string>('');

  const handleCheckboxChange = (key: string) => {
    console.log('선택된 체크박스:', key);
    setSelectedCategory(key);
    setSelectedDropdownValue('');
  };

  const categoryKey = selectedCategory as keyof typeof productCategories;
  const categoryData = productCategories[categoryKey];

  const dropdownOptions: ADropdownProps['options'] = categoryData
    ? categoryData.categories.map((product) => ({
        value: product.category,
        text: product.category,
      }))
    : [];

  return (
    <Box sx={{ display: 'flex' }}>
      <OneCheckbox
        {...onecheckboxprops}
        onChange={handleCheckboxChange}
        value={selectedCategory}
      />
      <ADropdown
        label={dropdownprops?.label}
        value={selectedDropdownValue}
        options={dropdownOptions}
        width="xlarge"
        onChange={(event) => {
          console.log('드롭다운 선택:', event.target.value);
          setSelectedDropdownValue(event.target.value);
        }}
      />
    </Box>
  );
};

export default CheckboxDropdownSelector;
