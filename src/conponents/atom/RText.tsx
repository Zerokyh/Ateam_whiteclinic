import { Typography } from '@mui/material';

export type TextProps = {
  text?: string;
  size?: string;
};

const RText = ({ text }: TextProps) => {
  return <Typography>{text}</Typography>;
};

export default RText;
