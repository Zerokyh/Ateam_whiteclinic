import { Checkbox, FormControlLabel } from '@mui/material';
import AText, { TextProps } from '../Text/AText';
import { CheckboxTextType } from '@/util/textType';

export type CheckboxProps = {
  isCheck?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  textprops?: Omit<TextProps, 'text'> & { text: CheckboxTextType };
};

const ACheckbox = ({ isCheck, onChange, textprops }: CheckboxProps) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={isCheck} onChange={onChange} />}
      label={<AText {...textprops} />}
      sx={{ cursor: 'pointer', userSelect: 'none' }}
    />
  );
};

export default ACheckbox;
