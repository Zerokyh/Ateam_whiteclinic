import { Box } from '@mui/material';
import AText, { TextProps } from '@/components/atom/Text/AText';
import FormField, { FormFieldProps } from './FormField';

export type TitledFormControlProps = {
  titleprops?: TextProps;
  formfieldprops?: FormFieldProps;
  onchange?: () => void;
};

const TitledFormControl = ({ titleprops, formfieldprops, onchange }: TitledFormControlProps) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '110px auto',
        minWidth: '550px',
        width: '100%',
        borderBottom: '1px solid black',
      }}
    >
      <Box
        sx={{
          minHeight: '57px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#F2F2F2',
          borderRight: '1px solid black',
        }}
      >
        {titleprops && <AText {...titleprops} />}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', paddingX: '15px', width: '100%' }}>
        {formfieldprops && <FormField {...formfieldprops} />}
      </Box>
    </Box>
  );
};

export default TitledFormControl;
