import { Avatar, Button, Box, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccountPopOver() {
  return (
    <Button sx={{ width: "250px" }}>
      <Avatar
        src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/301143836_5403507719728272_8684184403458448311_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ezkz2Envh28AX89vyId&_nc_ht=scontent.fdac135-1.fna&oh=00_AT-PSQgLVya-wnVOcNB0zgIwMc19Bi_Xy9mfFIp6qY1MQA&oe=63361E96"
        alt="Sadman Sakib Jisan"
        variant="rounded"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          ml: 1,
        }}
      >
        <Typography
          sx={{ fontSize: "14px", fontWeight: 600, color: "#7E8299",textTransform:"none", display:"flex", jutifyContent:"center",alignItems: "center",}}
        >
          Sadman Sakib Jisan <ExpandMoreIcon sx={{ml:1}}/>
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "#7E8299",textTransform:"none" }}>
          Admin
        </Typography>
      </Box>
    </Button>
  );
}
