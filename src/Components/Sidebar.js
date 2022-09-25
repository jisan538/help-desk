import * as React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ReactLogo from "../Assets/Logo.svg";
import Navbar from "./Navbar";
import navConfig from "./NavConfig";

import "./Styles/Sidebar.css";
import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import styled from "@emotion/styled";

const drawerWidth = 280;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  // eslint-disable-next-line
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    fontWeight: 700,
    borderRadius: "10px",
  };
  
  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#00AB55",
    boxShadow: "0px 8px 16px rgba(0, 171, 85, 0.24)",
    width: "204px",
    borderRadius: "8px",
    textTransform: "none",
    fontSIze: "14px",
    fontWeight: 600,
    height:"44px",
    "&:hover": {
      backgroundColor: "#00AB55",
      boxShadow: "0",
    },
  }));
  const { pathname } = useLocation();

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
          <img src={ReactLogo} alt="React Logo" />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ColorButton variant="contained">Create Ticket +</ColorButton>
        </Box>
        <List>
          {navConfig.map((item) => (
            <>
              <Link to={item.link} style={linkStyle} key={item.id}>
                <ListItem
                  key={item.id}
                  disablePadding
                  sx={{ ml: 1.5 }}
                  className={`${pathname === item.link ? "active" : "regular"}`}
                >
                  <ListItemButton>
                    <ListItemIcon
                      sx={{
                        color: pathname === item.link ? "#2065d1" : "#637381",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: pathname === item.link ? 600 : 400,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
            </>
          ))}
        </List>
      </Box>
      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{ pt: 5, borderRadius: 2, position: "relative" }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h6">
              Hi, Sadman Sakib Jisan
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Need help, <br />
              Please check our docs or videos
            </Typography>
          </Box>

          <Button
            href=""
            target="_blank"
            variant="outlined"
            color="success"
            sx={{ width: "204px", borderRadius: "8px" }}
          >
            Documentation
          </Button>
        </Stack>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRightStyle: "dashed",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Sidebar;
