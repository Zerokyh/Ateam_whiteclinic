"use client";

import * as React from "react";
import DropDownBox from "./conponents/molecules/DropDownBox";
import InputBox from "./conponents/atom/InputBox";
import CheckBox from "./conponents/atom/CheckBox";
import ClickButton from "./conponents/molecules/ClickButton";
import RegisterModal from "./conponents/organism/RegisterModal";
import ModifyInputBox from "./conponents/atom/FixedModifyInputBox";
import { Box } from "@mui/material";
import VariableModifyInputBox from "./conponents/atom/VariableModifyInputBox";
import FixedModifyStandardInput from "./conponents/atom/FixedModifyStandardInput";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Box width={100}>
        <ClickButton basicbuttonprops={{ text: "등록" }} onClick={handleOpen} />
      </Box>
      <CheckBox checked />
      <DropDownBox type="월" />
      <InputBox
        text="년(4자)"
        size="small"
        sx={{ width: 120 }}
        fontSize="small"
      />
      <InputBox />
      <ModifyInputBox type="text" placeholder="내용입력" />
      <RegisterModal
        open={open}
        handleClose={handleClose}
        modaltwoinputboxprops={{
          title: "세척 품목을 등록하겠습니까?",
          primaryText: "등록",
          secondaryText: "아니오",
        }}
      />
      <Box>
        <VariableModifyInputBox />
      </Box>
      <Box>
        <FixedModifyStandardInput />
      </Box>
    </main>
  );
};

export default Home;
