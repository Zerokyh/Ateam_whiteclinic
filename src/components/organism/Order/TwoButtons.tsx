import * as React from 'react';
import { Box } from '@mui/material';
import TwoButtons from '@/components/molecules/Button/TwoButton';
import ARegisterModal from '../Modal/ARegisterModal';

const TwoButtonsModal: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <TwoButtons
        leftButton={{
          text: '취소',
          variant: 'contained',
          color: 'default',
          size: 'full',
          onClick: handleClose,
        }}
        rightButton={{
          text: '등록',
          variant: 'contained',
          color: 'primary',
          size: 'full',
          onClick: handleOpen,
        }}
      />
      <ARegisterModal
        modaltwoinputboxprops={{
          title: '주문 정보를 등록하시겠습니까?',
          handleClose,
        }}
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default TwoButtonsModal;
