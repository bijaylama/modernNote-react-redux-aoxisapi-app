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

const drawerWidth = 240;

const SideBar = () => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
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
        <Box>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <EventNoteIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ReactNote
            </Typography>
          </Toolbar>
        </Box>
        <Divider variant="middle" />
        <List>
          {SidebarItem.map((text, index) => (
            <ListItem
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
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
export default SideBar;
