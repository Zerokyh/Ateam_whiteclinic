import { CustomButtonProps } from "@/util/type/ButtonType";
import { Button } from "@mui/material";
import { ButtonStyle } from "../style/ButtonStyle";

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