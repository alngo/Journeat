import { InputProps as MUIInputProps } from "@material-ui/core/Input";

export interface InputProps extends MUIInputProps {
  helper?: string;
  label?: string;
}
