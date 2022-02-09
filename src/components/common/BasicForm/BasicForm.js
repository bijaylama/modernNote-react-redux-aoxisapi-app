import { Input } from "@mui/material";

const BasicForm = ({
  sx,
  name,
  value,
  defaultValue,
  onChange,
  rows,
  placeholder,
}) => {
  return (
    <Input
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
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
