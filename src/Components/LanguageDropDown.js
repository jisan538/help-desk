import { Button, Typography, Menu, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import React, { useState } from "react";
import { Box } from "@mui/system";
import Translate from "../Assets/Icons/Translate";
import Language from "../Assets/language";
export default function LanguageDropDown() {
    const [anchorUser, setAnchorUser] = useState(false);
    const [language, setLanguage] = useState("Ban");
    const handleOpenUserMenu = (event) => {
        setAnchorUser(event.currentTarget);
    };
    const handleChoose = (event) => {
        setLanguage(event);
        setAnchorUser(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorUser(null);
    };
    return (
        <Box sx={{ display: "flex" }}>
            <Button onClick={handleOpenUserMenu}>
                <Translate />{" "}
                <Typography
                    sx={{ color: "#7E8299", ml: 1, textTransform: "none" }}
                >
                    {language}
                </Typography>{" "}
                {anchorUser ? (
                    <ExpandLessOutlinedIcon sx={{ color: "#7E8299" }} />
                ) : (
                    <ExpandMoreIcon sx={{ color: "#7E8299" }} />
                )}
            </Button>
            <Menu
                sx={{ mt: "48px" }}
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
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        borderRadius:"12px",
                        filter: "drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.24))",
                        mt: 1.5,
                        boxShadow: "-20px 20px 40px -4px rgba(145, 158, 171, 0.24)",
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
            >
                {Language.map((data) => {
                    return (
                        <MenuItem
                            key={data.id}
                            onClick={() => handleChoose(data.value)}
                            sx={{ width: "180px" }}
                        >
                            <img
                                src={data.flag}
                                alt={data.value}
                                style={{ marginRight: "16px" }}
                            />
                            <Typography textAlign="center">
                                {data.name}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </Menu>
        </Box>
    );
}
