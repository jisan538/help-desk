import {
    Button,
    Typography,
    Avatar,
    Menu,
    MenuItem,
    Box,
    Divider,
    useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import Settings from "../Components/ProflieSettings";
export default function AccountPopOver() {
    const [anchorUser, setAnchorUser] = useState(false);
    const handleOpenUserMenu = (event) => {
        setAnchorUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorUser(null);
    };
    const handleChoose = () => {
        setAnchorUser(null);
    };
    const matches = useMediaQuery('(min-width:567px)');

    return (
        <>
            <Button onClick={handleOpenUserMenu}>
                <Avatar
                    src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/301143836_5403507719728272_8684184403458448311_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ezkz2Envh28AX89vyId&_nc_ht=scontent.fdac135-1.fna&oh=00_AT-PSQgLVya-wnVOcNB0zgIwMc19Bi_Xy9mfFIp6qY1MQA&oe=63361E96"
                    alt="Sadman Sakib Jisan"
                    variant="rounded"
                />
                {matches && <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        ml: 1,
                        width:"200px"
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#7E8299",
                            textTransform: "none",
                            display: "flex",
                            jutifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        Sadman Sakib Jisan{" "}
                        {anchorUser ? (
                            <ExpandLessOutlinedIcon sx={{ color: "#7E8299" }} />
                        ) : (
                            <ExpandMoreIcon sx={{ color: "#7E8299" }} />
                        )}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "12px",
                            color: "#7E8299",
                            textTransform: "none",
                        }}
                    >
                        Admin
                    </Typography>
                </Box>}
            </Button>
            <Menu
                sx={{ mt: "52px" }}
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
                        borderRadius: "12px",
                        filter: "drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.24))",
                        mt: 1.5,
                        boxShadow:
                            "-20px 20px 40px -4px rgba(145, 158, 171, 0.24)",
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
                <Box
                    sx={{
                        width: "220px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        p: 2,
                    }}
                >
                    <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                        Md.Sadman Sakib Jisan
                    </Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                        sadman.sakib@intelli.global
                    </Typography>
                </Box>
                <Divider />
                {Settings.map((data) => {
                    return (
                        <MenuItem onClick={handleChoose} key={data.id}>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                }}
                            >
                                {data.title}
                            </Typography>
                        </MenuItem>
                    );
                })}
                <Divider />
                <MenuItem onClick={handleChoose}>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "#FF4842",
                        }}
                    >
                        Log Out
                    </Typography>
                </MenuItem>
            </Menu>
        </>
    );
}
