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
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/noteSlice";
import { CirclePicker } from "react-color";
import ColorPicker from "../common/ColorPicker/ColorPicker";

const Forms = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [bg, setBg] = useState("web");

  const handleChangeComplete = (color, event) => {
    this.setState({ bg: color.hex });
  };

  const dispatch = useDispatch();
  //
  // on submit handlebutton
  //
  // const handleButton = () => {};

  return (
    <Box sx={myStyle.wrapper}>
      <Paper sx={myStyle.myPaper}>
        {/* title basic form
        ///
        /// */}
        <BasicForm
          sx={myStyle.myBasicForm}
          placeholder="Title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* //
          detail basic form
        // */}
        <BasicForm
          sx={{ ...myStyle.myBasicForm, mt: 3 }}
          placeholder="Take a note..."
          rows={4}
          onChange={(e) => setDetail(e.target.value)}
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
              onClick={() => dispatch(addNote({ title }))}
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
