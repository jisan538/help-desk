import { Button, Typography, Avatar, Menu, MenuItem, Box} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import Language from "../Assets/language";
 
export default function AccountPopOver() {
  const [anchorUser, setAnchorUser] = useState(false);
    const handleOpenUserMenu = (event) => {
        setAnchorUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorUser(null);
    };
    const handleChoose = () =>{
      setAnchorUser(null);
    }
  return (
    <>
    <Button sx={{ width: "250px" }} onClick={handleOpenUserMenu}>
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
          Sadman Sakib Jisan {anchorUser ? <ExpandLessOutlinedIcon sx={{ color: "#7E8299" }}/> : <ExpandMoreIcon sx={{ color: "#7E8299" }} />}
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "#7E8299",textTransform:"none" }}>
          Admin
        </Typography>
      </Box>
    </Button>
    <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={anchorUser}
                onClose={handleCloseUserMenu}
            >
                {Language.map((data) => {
                    return (
                        <MenuItem
                            key={data.id}
                            onClick={handleChoose}
                            sx={{ width: "180px" }}
                        >
                            <Avatar
                                src={data.flag}
                                alt={data.value}
                                sx={{ mr: 2 }}
                            />
                            <Typography textAlign="center">
                                "Name"
                            </Typography>
                        </MenuItem>
                    );
                })}
            </Menu>
    </>
  );
}
