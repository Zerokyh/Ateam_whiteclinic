import { ListItem } from "@mui/material";
import { TitleMenuBoxProps } from "@/app/util/titleMenuBoxType";
import Icon from "../atom/Icon";
import Label from "../atom/Label";
import { TitleMenuIconStyle } from "@/app/styles/mui";

const TitleMenuBox = ({ iconprops, labelprops }: TitleMenuBoxProps) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Icon
        {...iconprops}
        sx={{
          ...TitleMenuIconStyle,
        }}
      />
      <Label {...labelprops} fontSize="small" />
    </ListItem>
  );
};

export default TitleMenuBox;
