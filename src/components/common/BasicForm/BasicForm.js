import { Input } from "@mui/material";

const BasicForm = ({ sx, value, onChange, rows, placeholder }) => {
  return (
    <Input
      onChange={onChange}
      value={value}
      multiline
      size="medium"
      maxRows={4}
      rows={rows}
      disableUnderline
      sx={sx}
      fullWidth
      placeholder={placeholder}
    />
  );
};
export default BasicForm;
