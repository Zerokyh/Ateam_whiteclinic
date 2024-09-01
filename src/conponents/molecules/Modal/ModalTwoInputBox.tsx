import {
  ModalFormContentsStyle,
  ModalFormStyle,
  PrimaryButtonStyle,
  SecondaryButtonStyle,
} from '@/styles/mui';
import { Box } from '@mui/material';

export type ModalTwoInputBoxProps = {
  title?: string;
  primaryText?: string;
  secondaryText?: string;
};

const ModalTwoInputBox = ({
  title = '주제를 정해주세요',
  primaryText = '등록',
  secondaryText = '아니오',
}: ModalTwoInputBoxProps) => {
  const buttonData = {
    cancle: {
      text: secondaryText,
      sx: SecondaryButtonStyle,
    },
    register: {
      text: primaryText,
      sx: PrimaryButtonStyle,
    },
  };
  return (
    <Box
      sx={{
        ...ModalFormStyle,
      }}
    >
      <Box sx={{ ...ModalFormContentsStyle }}>
        <Box>{title}</Box>
        <Box>
          {Object.entries(buttonData).map(([key, item]) => (
            <ACustomButton key={key} text={item.text} variant="contained" sx={{ ...item.sx }} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ModalTwoInputBox;
