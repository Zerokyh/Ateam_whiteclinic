import { Box } from "@mui/material";
import FormField, { FormFieldProps } from "./FormField";
import AText, { TextProps } from "@/conponents/atom/Text/AText";

export type TitledFormControlProps = {
    titleprops?: TextProps;
    formfieldprops?: FormFieldProps,
}

const TitledFormControl = ({ titleprops, formfieldprops }: TitledFormControlProps) => {
    return (
        <Box sx={{ display:'flex', justifyContent:'start', alignItems:'center', gap: '20px', padding: '10px', width: 'fit-content'}}>
            {titleprops && <AText {...titleprops} />}
            {formfieldprops && <FormField {...formfieldprops} />}
        </Box>
    );
}

export default TitledFormControl;