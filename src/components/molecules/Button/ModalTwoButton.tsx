import ACustomButton from '@/components/atom/Button/ACustomButton';
import { ACustomButtonProps } from '@/util/ButtonType';
import { Box } from '@mui/material';

type TwoButtonsProps = {
  leftButton: ACustomButtonProps;
  rightButton: ACustomButtonProps;
  onClose?: () => void;
  onAdd?: () => void;
};

const ModalTwoButtons = ({ leftButton, rightButton, onClose, onAdd }: TwoButtonsProps) => {
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
      <ACustomButton {...leftButton} onClick={onClose} />
      <ACustomButton {...rightButton} onClick={onAdd} />
    </Box>
  );
};

export default ModalTwoButtons;
