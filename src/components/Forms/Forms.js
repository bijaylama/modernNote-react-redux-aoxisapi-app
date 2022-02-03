import React from "react";
import {
  Box,
  Button,
  Input,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
const Forms = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Paper
        sx={{
          boxShadow: "0 0px 40px rgb(0 0 0 / 5%)",
          borderRadius: 2,
          p: 4,
        }}
      >
        <Input
          multiline
          size="medium"
          maxRows={4}
          sx={{
            letterSpacing: 0.8,
          }}
          disableUnderline
          fullWidth
          placeholder="Title..."
        />
        <Input
          multiline
          size="medium"
          maxRows={8}
          rows={4}
          sx={{
            mt: 3,
            letterSpacing: 0.8,
          }}
          disableUnderline
          fullWidth
          placeholder="Take a note..."
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            sx={{ borderRadius: 2, mr: 2 }}
            variant="outlined"
            color="primary1"
            startIcon={<CloseFullscreenIcon />}
          >
            Close
          </Button>
          <Button
            sx={{ borderRadius: 2 }}
            variant="contained"
            color="primary1"
            endIcon={<SendIcon />}
          >
            Save
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
export default Forms;
