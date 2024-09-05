'use client';

import ACheckbox, { CheckboxProps } from '@/conponents/atom/CheckBox/ACheckbox';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import NormalWashModal from '../SalesForm/NormalWashModal';
import { normalWashModalData } from '@/constants/salesData';

export type CheckboxGroupProps = {
  checkboxes: { [key: string | number]: CheckboxProps };
};

const OneCheckbox = ({ checkboxes }: CheckboxGroupProps) => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCheckboxChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxText = checkboxes[key].textprops?.text || 'Unknown';

    if (event.target.checked) {
      console.log(`${checkboxText} 체크됨`);
      if (key === 'normalWash') {
        setIsModalOpen(true);
      }
      setSelectedKey(key);
    } else {
      console.log(`${checkboxText} 해제됨`);
      setSelectedKey(null);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedKey(null);
  };

  const handleRegister = () => {
    setSelectedKey('normalWash');
    setIsModalOpen(false);
  };

  const modalButtonProps = {
    textprops: normalWashModalData.textprops,
    buttongroupprops: {
      abuttonprops: normalWashModalData.abuttonprops.map((modalButton, index) => ({
        ...modalButton,
        onClick: index === 0 ? handleCloseModal : handleRegister,
      })),
    },
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {Object.entries(checkboxes).map(([key, checkboxProps]) => (
          <ACheckbox
            key={key}
            isCheck={selectedKey === key}
            onChange={handleCheckboxChange(key)}
            textprops={checkboxProps.textprops}
          />
        ))}
      </Box>
      <NormalWashModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        modalcontentprops={modalButtonProps}
      />
    </>
  );
};

export default OneCheckbox;
