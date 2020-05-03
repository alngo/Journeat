import React from "react";
import Grid from "@material-ui/core/Grid";
import { InputProps } from "types/InputProps";
import NumberField from "components/NumberField/NumberField";
import TextField from "components/TextField/TextField";

interface Props {
  fields: Array<InputProps>;
  submit?: React.ReactElement;
}

const FormFactory = (props: Props) => {
  const { fields, submit } = props;

  const generateInput = (props: InputProps) => {
    switch (props.type) {
      case "number":
        return <NumberField {...props} />;
      default:
        return <TextField {...props} />;
    }
  };

  const generateForm = (fields: Array<InputProps>) => {
    const inputs = fields.map((props) => {
      return (
        <Grid key={props.id} item xs={12}>
          {generateInput(props)}
        </Grid>
      );
    });
    return inputs;
  };

  return (
    <form>
      <Grid container spacing={2}>
        {generateForm(fields)}
        {submit}
      </Grid>
    </form>
  );
};

export default FormFactory;
