import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Alert,
  Box,
  Collapse,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import BasicCard from "../BasicCard/BasicCard";
import BasicModal from "../BasicModal/BasicModal";
import BasicForm from "../../common/BasicForm/BasicForm";
import { useDispatch } from "react-redux";
import { deleteNoteAsync, updateNoteAsync } from "../../../redux/noteSlice";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";
import BasicButton from "../BasicButton/BasicButton";

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
  const [input, setInput] = useState({ title: "", details: "" });
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

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
    setInput({ title, details });
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

  const handleChange = ({ name, value }) => {
    console.log(name);

    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  // ==================================================
  //     update button
  // ==================================================
  const updateButton = () => {
    if (input.title.trim() === "" && input.details.trim() === "") {
      setError(true);
    } else {
      dispatch(
        updateNoteAsync({
          id,
          title: input.title,
          details: input.details,
        })
      );
      setModal(false);
      setError(false);
    }
  };
  return (
    <>
      <IconButton onClick={handleOpen}>
        <MoreHorizIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
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
        <AnimatePresence>
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
                {/* ==============================
                      error alert
              ============================= */}
                <Box sx={{ width: "100%" }}>
                  <Collapse in={error}>
                    <Alert
                      severity="error"
                      action={
                        <IconButton
                          aria-label="close"
                          size="small"
                          onClick={() => {
                            setError(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                      sx={{ mb: 2 }}
                    >
                      Enter title or content..!
                    </Alert>
                  </Collapse>
                </Box>
                {/* ===============================
                      title form
              ================================ */}
                <BasicForm
                  name="title"
                  defaultValue={title}
                  onChange={(e) => handleChange(e.target)}
                  placeholder="Title..."
                />
                <BasicForm
                  name="details"
                  defaultValue={details}
                  placeholder="Take a note..."
                  // rows={4}
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
                  <BasicButton
                    onClick={modalClose}
                    sx={{ mr: "2%" }}
                    color="primary1"
                    variant="contained"
                  >
                    Cancle
                  </BasicButton>
                  <BasicButton
                    onClick={updateButton}
                    color="primary1"
                    variant="outlined"
                  >
                    Save
                  </BasicButton>
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
                    width: "65%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <BasicButton
                    onClick={() => dispatch(deleteNoteAsync({ id }))}
                    color="primary1"
                    variant="contained"
                  >
                    Yes, delete it
                  </BasicButton>
                  <BasicButton
                    onClick={modalClose}
                    color="primary1"
                    variant="outlined"
                  >
                    Cancel
                  </BasicButton>
                </Box>
              </Box>
            </BasicModal>
          )}
        </AnimatePresence>
      </Menu>
    </>
  );
}
