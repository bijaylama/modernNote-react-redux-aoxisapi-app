import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, IconButton, Input, Typography } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import BasicCard from "../BasicCard/BasicCard";
import BasicModal from "../BasicModal/BasicModal";
import BasicForm from "../../common/BasicForm/BasicForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function MenuCard({ note }) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [modal, setModal] = useState(false);
  const [action, setAction] = useState("");
  const [input, setInput] = useState({ title: "" });

  const { id, title, details, favorite, date, color } = note;

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleView = () => {
    setModal(true);
    setAction("view");
    handleClose();
  };

  const handleEdit = () => {
    setAction("edit");
    setModal(true);
    handleClose();
  };
  const handleDelete = () => {
    setAction("delete");
    setModal(true);
    handleClose();
  };
  const modalClose = () => {
    setModal(false);
    setAction("");
  };
  const getComponent = () => (
    <>
      <MoreHorizIcon />
    </>
  );
  const handleChange = ({ name, value }) => {
    console.log(value);

    setInput((preValue) => {
      return {
        ...preValue,
        title: value,
      };
    });
  };
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
        {/* ================================================================================
                ----- view ---------------
        ================================================================================ */}
        <MenuItem onClick={handleView}>
          <RemoveRedEyeOutlinedIcon
            fontSize="12"
            sx={{ color: "text.secondary" }}
          />
          <Typography sx={{ pl: 1, pr: 1 }}>View</Typography>
        </MenuItem>
        {/* ================================================================================
                ----- edit ---------------
        ================================================================================ */}
        <MenuItem onClick={handleEdit}>
          <EditOutlinedIcon fontSize="12" sx={{ color: "text.secondary" }} />
          <Typography sx={{ pl: 1, pr: 1 }}>Edit</Typography>
        </MenuItem>
        {/* ================================================================================
                ----- delete ---------------
        ================================================================================ */}
        <MenuItem onClick={handleDelete}>
          <DeleteForeverOutlinedIcon
            fontSize="12"
            sx={{ color: "text.secondary" }}
          />
          <Typography sx={{ pl: 1, pr: 1 }}>Delete</Typography>
        </MenuItem>
        {/* ================================================================================
                ----- modal component ---------------
        ================================================================================ */}
        {/* ============================================================================
                                      view
        ============================================================================ */}
        {action === "view" && (
          <BasicModal open={modal} close={modalClose}>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {details}
              </Typography>
            </Box>
          </BasicModal>
        )}
        {/* ============================================================================
                                      edit
        ============================================================================ */}
        {action === "edit" && (
          <BasicModal open={modal} close={modalClose}>
            <Box sx={style}>
              <BasicForm
                name="title"
                value={title}
                onChange={(e) => handleChange(e.target)}
              />
              <BasicForm
                name="details"
                value={details}
                rows={4}
                onChange={(e) => handleChange(e.target)}
              />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  mt: 2,
                  justifyContent: "flex-end",
                }}
              >
                <Button sx={{ mr: "2%" }} color="primary1" variant="contained">
                  Cancle
                </Button>
                <Button color="primary1" variant="outlined">
                  Save
                </Button>
              </Box>
            </Box>
          </BasicModal>
        )}
        {/* ============================================================================
                                      delete
        ============================================================================ */}
        {action === "delete" && (
          <BasicModal open={modal} close={modalClose}>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Are you sure?
              </Typography>
              <Typography sx={{ pb: 2 }}>
                You won't be able to revert this!
              </Typography>
              <Box
                sx={{
                  width: "60%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Button color="primary1" variant="contained">
                  Yes, delete it
                </Button>
                <Button color="primary1" variant="outlined">
                  Cancel
                </Button>
              </Box>
            </Box>
          </BasicModal>
        )}
      </BasicCard>
    </div>
  );
}
