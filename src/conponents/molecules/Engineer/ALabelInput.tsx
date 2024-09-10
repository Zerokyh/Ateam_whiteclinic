import ABasicInput, { ABasicInputProps } from '@/conponents/atom/Input/Basic/ABasicInput';
import AText, { TextProps } from '@/conponents/atom/Text/AText';
import { Box } from '@mui/material';

type LabelInputProps = Omit<ABasicInputProps, 'label'> & {
  label: string;
  textProps?: Omit<TextProps, 'text'>;
};

const LabelInput = ({ label, textProps, ...inputProps }: LabelInputProps) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          borderBottom: '1px solid #ccc',
        }}
      >
        <Box
          sx={{
            width: '120px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#F2F2F2',
            borderRight: '1px solid #ccc',
            padding: '8px',
          }}
        >
          <AText text={label} {...textProps} />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            padding: '8px 16px',
          }}
        >
          <ABasicInput label={label} {...inputProps} />
        </Box>
      </Box>
    </>
  );
};

export default LabelInput;
