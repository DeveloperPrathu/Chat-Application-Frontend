import { Stack } from "@mui/material";
import React from "react";
import Chats from "./Chats";

const GeneralApp = () => {

  return (
    <Stack direction={"row"} sx={{width: "100%"}}>
    {/* Chats */}
    <Chats />

    {/* Conversation */}
    </Stack>
  );
};

export default GeneralApp;
