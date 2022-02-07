import react, { useState } from "react";
import {
  Box,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import BasicForm from "../common/BasicForm/BasicForm";
import BasicButton from "../common/BasicButton/BasicButton";
import { myStyle } from "./myStyle";
import { useDispatch, useSelector } from "react-redux";
import ColorPicker from "../common/ColorPicker/ColorPicker";
import { addNoteAsync } from "../../redux/noteSlice";
import { nanoid } from "nanoid";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const Forms = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const newColor = useSelector((state) => state.colors.name);
  const dispatch = useDispatch();

  //
  // on submit handlebutton
  //
  const handleButton = () => {
    var newDate = new Date().toString().split(" ").splice(1, 3).join(" ");
    if (title.trim() === "" && details.trim() === "") {
      setError(true);
      setOpen(false);
    } else {
      dispatch(
        addNoteAsync({
          id: nanoid(),
          title,
          details,
          date: newDate,
          color: newColor,
        })
      );
      setOpen(true);
      setError(false);
      setTitle("");
      setDetails("");
    }
  };

  return (
    <Box sx={myStyle.wrapper}>
      {/* //
// success message alert
      // */}
      <Box sx={{ width: "100%" }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Successfully Saved!
          </Alert>
        </Collapse>
      </Box>

      {/* /
      // error message alert
      // */}
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
      <Paper sx={myStyle.myPaper}>
        {/* title basic form
        ///
        /// */}
        <BasicForm
          value={title}
          sx={myStyle.myBasicForm}
          placeholder="Title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* //
          detail basic form
        // */}
        <BasicForm
          value={details}
          sx={{ ...myStyle.myBasicForm, mt: 3 }}
          placeholder="Take a note..."
          rows={4}
          onChange={(e) => setDetails(e.target.value)}
        />
        <Box sx={myStyle.myBox}>
          {/* //
          basic Button
          // */}
          <ColorPicker />
          <Box>
            <BasicButton
              startIcon={<CloseFullscreenIcon />}
              sx={{ ...myStyle.myButton, mr: 2 }}
              variant="outlined"
              onClick={onClick}
            >
              Close
            </BasicButton>
            <BasicButton
              startIcon={<SendIcon />}
              sx={myStyle.myButton}
              variant="contained"
              onClick={handleButton}
            >
              Save
            </BasicButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
export default Forms;
