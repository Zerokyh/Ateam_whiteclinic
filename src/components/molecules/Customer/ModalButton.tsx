import React, { useState } from 'react';
import AButton, { AButtonProps } from '@/components/atom/Button/AButton';
import { Box } from '@mui/material';
import SalesModal from './SalesModal';

type TwoButtonsProps = {
  leftButton: AButtonProps;
  rightButton: AButtonProps;
};

const ModalButton = ({ leftButton, rightButton }: TwoButtonsProps) => {
  // 모달 창 열림 상태를 관리
  const [open, setOpen] = useState(false);

  // 모달 열기 및 닫기 핸들러
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        width: '100%',
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AButton {...leftButton} />
      <AButton {...rightButton} onClick={handleOpen} />

      <SalesModal
        open={open}
        handleClose={handleClose}
        modalcontentprops={{
          textprops: {
            text: '세척품목을 추가 등록하시겠습니까?',
            size: 'large',
          },
        }}
      />
    </Box>
  );
};

export default ModalButton;
