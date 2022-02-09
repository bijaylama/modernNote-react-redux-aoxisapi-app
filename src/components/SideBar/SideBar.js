import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EventNoteIcon from "@mui/icons-material/EventNote";
import IconButton from "@mui/material/IconButton";
import { SidebarItem } from "./consts/SidebarItem";
import { useDispatch } from "react-redux";
import { getFavAsync, getNotesAsync } from "../../redux/noteSlice";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, CssBaseline } from "@mui/material";
import { motion } from "framer-motion";
import { Logo } from "../Logo";

const drawerWidth = 240;

const SideBar = (props) => {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // ================================
  // drawer
  // ================================
  const drawer = (
    <>
      <Box>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* ============= logo ============= */}
            <Logo />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ReactNote
          </Typography>
        </Toolbar>
      </Box>
      <Divider variant="middle" />
      <List>
        {SidebarItem.map((text, index) => (
          <motion.div
            key={text.id}
            whileHover={{
              scale: 1.1,
              x: 8,
              transition: { type: "spring" },
            }}
          >
            <ListItem
              component={motion.div}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                delay: index / 2,
              }}
              button
              onClick={() =>
                text.type === "all"
                  ? dispatch(getNotesAsync(""))
                  : dispatch(getFavAsync(text.type))
              }
              key={text.id}
            >
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.label} />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        color="inherit"
        position="fixed"
        sx={{
          boxShadow: "0 0px 40px rgb(0 0 0 / 5%)",
          display: { lg: "none" },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, ml: 2, display: {} }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">ReactNote</Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        // sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* ==================================
          swap drawer
      ================================== */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* ==================================
          permanent drawer
      ================================== */}
        <Drawer
          sx={{
            display: { sm: "none", xs: "none", lg: "block" },
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              height: "91%",
              m: 4,
              width: drawerWidth,
              boxSizing: "border-box",
              boxShadow: "0 0px 40px rgb(0 0 0 / 5%)",
              borderRadius: 2,
            },
          }}
          variant="permanent"
          anchor="left"
        >
          {/* =====================
              calling drawer
        ===================== */}
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
export default SideBar;
