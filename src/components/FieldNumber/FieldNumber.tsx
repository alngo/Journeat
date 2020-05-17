import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import { I_Input } from "types";

const NumberField = (props: I_Input) => {
  const { helper, label, ...other } = props;
  return (
    <FormControl fullWidth>
      {label && <InputLabel htmlFor={label}>{label}</InputLabel>}
      <Input {...other} type="number" />
      {helper && <FormHelperText>{helper}</FormHelperText>}
    </FormControl>
  );
};

export default NumberField;
