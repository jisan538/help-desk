import {
    Button,
    Typography,
    AppBar,
    Avatar,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    Menu,
    MenuItem,
    OutlinedInput,
    Toolbar,
    Icon,
    ListItemIcon,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { Box } from "@mui/system";
import Translate from "../Assets/Icons/Translate";
import Language from "../Assets/language";
export default function LanguageDrop() {
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
                <ExpandMoreIcon sx={{ color: "#7E8299" }} />
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
                            onClick={() => handleChoose(data.value)}
                            sx={{ width: "180px" }}
                        >
                            <Avatar src={data.flag} alt={data.value} sx={{mr:2}}/>
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
