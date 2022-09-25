import {
    AppBar,
    Avatar,
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    Menu,
    MenuItem,
    OutlinedInput,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import LanguageDrop from "./LanguageDrop";

const drawerWidth = 280;
export default function Navbar({ handleDrawerToggle }) {
    const [anchorUser, setAnchorUser] = useState(false);
    const handleOpenUserMenu = (event) => {
        setAnchorUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorUser(null);
    };
    const settings = ["Profile", "Account", "Dashboard", "Logout"];
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { lg: `calc(100% - ${drawerWidth}px)` },
                ml: { lg: `${drawerWidth}px` },
                borderBottom: "1.5px solid #F2F4F7",
            }}
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(8px)",
                boxShadow: "none",
            }}
        >
            <Toolbar>
                <IconButton
                    color="default"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { lg: "none" } }}
                >
                    <MenuOpenRoundedIcon />
                </IconButton>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <SearchBar handleChange={handleChange} value={value} />
                    <LanguageDrop />
                </Box>
            </Toolbar>
        </AppBar>
    );
}
