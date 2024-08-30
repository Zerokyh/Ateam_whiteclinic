import { ButtonStyle } from "@/styles/ButtonStyle";
import { CustomButtonProps } from "@/util/ButtonType";
import { Button } from "@mui/material";


const CustomButton = ({ 
  variant, 
  text, 
  onClick, 
  color = 'default', 
  size = 'medium'
}: CustomButtonProps) => {
  return (
    <Button 
      variant={variant}
      onClick={onClick} 
      sx={{ 
        ...ButtonStyle.size[size], 
        ...ButtonStyle.color[color]
      }}
    >
      {text}
    </Button>
  );
}

export default CustomButton;