import {
    Box,
    List,
    Badge,
    Tooltip,
    Divider,
    Typography,
    IconButton,
    Menu,
    Button,
    ListSubheader,
} from "@mui/material";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import { noCase } from "change-case";
import React, { useRef, useState } from "react";
import Notification from "../Assets/Icons/Notification";
import MarkRead from "../Assets/Icons/MarkRead";
import Notifications from "../Assets/Notification";

export default function NotificationDropDown() {
    const anchorRef = useRef(null);
    const [notifications, setNotifications] = useState(Notifications);
    const totalUnRead = notifications.filter(
        (item) => item.isUnRead === true
    ).length;
    const [open, setOpen] = useState(null);
    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const handleMarkAllAsRead = () => {
        setNotifications(
            notifications.map((notification) => ({
                ...notification,
                isUnRead: false,
            }))
        );
    };

    return (
        <>
            <IconButton
                ref={anchorRef}
                color={open ? "primary" : "default"}
                onClick={handleOpen}
            >
                <Badge badgeContent={totalUnRead} color="error">
                    <Notification />
                </Badge>
            </IconButton>

            <Menu
                sx={{ width: "360px", p: 2, mt: "48px", ml: 0.75 }}
                id="menu-appbar"
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
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
                        display: "flex",
                        alignItems: "center",
                        py: 2,
                        px: 2.5,
                    }}
                >
                    <Box sx={{ width: "360px" }}>
                        <Typography variant="p" sx={{ fontWeight: 700 }}>
                            Notifications
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                        >
                            You have {totalUnRead} unread messages
                        </Typography>
                    </Box>
                    {totalUnRead > 0 && (
                        <Tooltip title=" Mark all as read">
                            <IconButton
                                color="primary"
                                onClick={handleMarkAllAsRead}
                            >
                                <MarkRead />
                            </IconButton>
                        </Tooltip>
                    )}
                </Box>
                <Divider />
                <List
                    disablePadding
                    subheader={
                        <ListSubheader
                            disableSticky
                            sx={{ py: 1, px: 2.5, typography: "overline" }}
                        >
                            New
                        </ListSubheader>
                    }
                >
                    {notifications.slice(0, 2).map((notification) => (
                        <Box
                            sx={{
                                py: 1.5,
                                px: 2.5,
                                mt: "1px",
                                display: "flex",
                                ...(notification.isUnRead && {
                                    bgcolor: "rgba(145, 158, 171, 0.16)",
                                }),
                            }}
                        >
                            <img
                                src={notification.avatar}
                                alt={notification.title}
                                style={{ marginRight: "24px" }}
                            />
                            <Box>
                                <Typography variant="subtitle2">
                                    {notification.title}
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: "text.secondary" }}
                                    >
                                        &nbsp;{" "}
                                        {noCase(notification.description)}
                                    </Typography>
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        mt: 0.5,
                                        display: "flex",
                                        alignItems: "center",
                                        color: "text.disabled",
                                    }}
                                >
                                    <WatchLaterOutlinedIcon
                                        sx={{ mr: 0.5, width: 16, height: 16 }}
                                    />{" "}
                                    {notification.createdAt}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </List>
                <List
                    disablePadding
                    subheader={
                        <ListSubheader
                            disableSticky
                            sx={{ py: 1, px: 2.5, typography: "overline" }}
                        >
                            Before that
                        </ListSubheader>
                    }
                >
                    {notifications.slice(2, 5).map((notification) => (
                        <Box
                            sx={{
                                py: 1.5,
                                px: 2.5,
                                mt: "1px",
                                display: "flex",
                                ...(notification.isUnRead && {
                                    bgcolor: "rgba(145, 158, 171, 0.16)",
                                }),
                            }}
                        >
                            <img
                                src={notification.avatar}
                                alt={notification.title}
                                style={{ marginRight: "24px" }}
                            />
                            <Box>
                                <Typography variant="subtitle2">
                                    {notification.title}
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: "text.secondary" }}
                                    >
                                        &nbsp;{" "}
                                        {noCase(notification.description)}
                                    </Typography>
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        mt: 0.5,
                                        display: "flex",
                                        alignItems: "center",
                                        color: "text.disabled",
                                    }}
                                >
                                    <WatchLaterOutlinedIcon
                                        sx={{ mr: 0.5, width: 16, height: 16 }}
                                    />{" "}
                                    {notification.createdAt}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </List>
                <Divider sx={{ borderStyle: "dashed" }} />
                <Box sx={{ p: 1 }}>
                    <Button fullWidth disableRipple>
                        View All
                    </Button>
                </Box>
            </Menu>
        </>
    );
}
