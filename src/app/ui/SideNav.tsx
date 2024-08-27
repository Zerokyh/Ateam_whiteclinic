"use client";

import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ImageIcon from "../conponents/atom/ImageIcon";
import { DrawerMuiStyle, DrawerToolbarMuiStyle } from "../styles/mui";
import { logoData } from "../constants/logoData";
import MenuBox from "../conponents/organism/MenuBox";

const SideNav = () => {
  return (
    <Drawer sx={{ ...DrawerMuiStyle }} variant="permanent" anchor="left">
      <Toolbar
        sx={{
          ...DrawerToolbarMuiStyle,
        }}
      >
        <ImageIcon {...logoData} />
      </Toolbar>
      <List>
        <MenuBox />
      </List>
    </Drawer>
  );
};

export default SideNav;
