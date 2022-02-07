import { Input } from "@mui/material";

const BasicForm = ({ sx, name, value, onChange, rows, placeholder }) => {
  return (
    <Input
      onChange={onChange}
      defaultValue={value}
      multiline
      size="medium"
      maxRows={4}
      rows={rows}
      name={name}
      disableUnderline
      sx={sx}
      fullWidth
      placeholder={placeholder}
    />
  );
};
export default BasicForm;
