import { Badge, IconButton } from "@mui/material";
import React from "react";
import Notification from "../Assets/Icons/Notification";

export default function NotificationDropDown() {
    return (
            <IconButton
                size="large"
                color="inherit"
            >
                <Badge badgeContent={17} color="error">
                    <Notification />
                </Badge>
            </IconButton>
    );
}
