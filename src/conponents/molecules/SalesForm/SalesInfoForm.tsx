import { Box } from "@mui/material";
import TitledFormControl, { TitledFormControlProps } from "./TitledFormControl";

type SalesInfoFormProps = {
   titledformcontrolprops : TitledFormControlProps[];
}

const SalesInfoForm = ({titledformcontrolprops}:SalesInfoFormProps) => {
    return (
        <Box sx={{display:'flex', flexDirection:'column', border:'1px solid black', width: 'fit-content'}}>
           {titledformcontrolprops.map((props, index) => (
              <TitledFormControl key={index} {...props} />
           ))}
        </Box>
     );
}

export default SalesInfoForm;