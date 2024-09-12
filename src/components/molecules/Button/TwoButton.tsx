import ACustomButton from '@/components/atom/Button/ACustomButton';
import { ACustomButtonProps } from '@/util/ButtonType';
import { Box } from '@mui/material';

type TwoButtonsProps = {
  leftButton: ACustomButtonProps;
  rightButton: ACustomButtonProps;
};

const TwoButtons = ({ leftButton, rightButton }: TwoButtonsProps) => {
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
      <ACustomButton {...leftButton} />
      <ACustomButton {...rightButton} />
    </Box>
  );
};

export default TwoButtons;
