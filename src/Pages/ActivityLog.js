import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import Sidebar from "../Components/Sidebar.js";

export default function ActivityLog() {
    const drawerWidth = 280;

  return (
    <Box>
            <Sidebar />
            <Box
                component="main"
                sx={{
                    p: 3,
                    width: { lg: `calc(100% - ${drawerWidth}px)` },
                    ml: { lg: `${drawerWidth}px` },
                }}
            >
                <Toolbar />
                <Typography variant="h5" sx={{ mb: 5, fontWeight:600}}>
                    Ticket Management
                </Typography>
            </Box>
        </Box>
  )
}
