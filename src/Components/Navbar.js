import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    useMediaQuery,
} from "@mui/material";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import LanguageDropDown from "./LanguageDropDown";
import NotificationDropDown from "./NotificationDropDown";
import AccountPopOver from "./AccountPopOver";

const drawerWidth = 280;
export default function Navbar({ handleDrawerToggle }) {
  

    const [value, setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const matches = useMediaQuery('(min-width:567px)');

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
                    {matches && <SearchBar handleChange={handleChange} value={value} />}
                    <Box sx={{display:"flex", flexDirection:"row"}}>
                        <LanguageDropDown />
                        <NotificationDropDown />
                        <AccountPopOver/>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
