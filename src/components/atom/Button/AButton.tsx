import { ButtonStyle } from '@/styles/ButtonStyle';
import { Button } from '@mui/material';

export type AButtonProps = {
  variant?: 'text' | 'contained' | 'outlined';
  text: '등록중지' | '취소' | '등록' | '아니오' | '추가등록' | '급여사항확인';
  onClick?: () => void;
  size?: keyof typeof ButtonStyle.size;
  color?: keyof typeof ButtonStyle.color;
  sx?: object;
};

const AButton = ({
  variant,
  text,
  onClick,
  color = 'default',
  size = 'medium',
  sx,
}: AButtonProps) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        ...ButtonStyle.size[size],
        ...ButtonStyle.color[color],
        ...sx,
      }}
    >
      {text}
    </Button>
  );
};

export default AButton;
