import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton, Typography } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import BasicCard from "../BasicCard/BasicCard";

export default function MenuCard() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getComponent = () => (
    <>
      <MoreHorizIcon />
    </>
  );
  return (
    <div>
      <BasicCard
        handleClose={handleClose}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        handleOpen={handleOpen}
        getComponent={getComponent()}
      >
        <MenuItem onClick={handleClose}>
          <RemoveRedEyeOutlinedIcon
            fontSize="12"
            sx={{ color: "text.secondary" }}
          />
          <Typography sx={{ pl: 1, pr: 1 }}>View</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <EditOutlinedIcon fontSize="12" sx={{ color: "text.secondary" }} />
          <Typography sx={{ pl: 1, pr: 1 }}>Edit</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DeleteForeverOutlinedIcon
            fontSize="12"
            sx={{ color: "text.secondary" }}
          />
          <Typography sx={{ pl: 1, pr: 1 }}>Delete</Typography>
        </MenuItem>
      </BasicCard>
    </div>
  );
}
