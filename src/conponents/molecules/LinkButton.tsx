import { ListItemButton } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { colors } from "@/app/styles/colors";
import { LinkButtonProps } from "@/app/util/linkButtonType";
import Icon from "../atom/Icon";
import Label from "../atom/Label";
import { LinkButtonHoverStyle } from "@/app/styles/mui";

const LinkButton = ({ iconprops, labelprops, href }: LinkButtonProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} passHref style={{ textDecoration: "none" }}>
      <ListItemButton
        sx={{
          color: pathname === href ? colors.text.active : colors.text.inActive,
          ":hover": {
            "& .MuiListItemIcon-root, & .MuiListItemText-root": {
              color: colors.text.active,
            },
          },
        }}
      >
        <Icon
          {...iconprops}
          sx={{
            ...LinkButtonHoverStyle,
            color:
              pathname === href ? colors.text.active : colors.text.inActive,
          }}
        />
        <Label
          {...labelprops}
          sx={{
            ...LinkButtonHoverStyle,
            color:
              pathname === href ? colors.text.active : colors.text.inActive,
          }}
        />
      </ListItemButton>
    </Link>
  );
};

export default LinkButton;
