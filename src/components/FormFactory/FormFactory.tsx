import React from "react";
import Grid from "@material-ui/core/Grid";
import { I_Input } from "types";
import NumberField from "components/FieldNumber/FieldNumber";
import TextField from "components/FieldText/FieldText";
import Typography from "@material-ui/core/Typography";

interface Props {
  legend?: String;
  fields: Array<I_Input>;
  submit?: React.ReactElement;
}

const FormFactory = (props: Props) => {
  const { legend, fields, submit } = props;

  const generateInput = (props: I_Input) => {
    switch (props.type) {
      case "number":
        return <NumberField {...props} />;
      default:
        return <TextField {...props} />;
    }
  };

  const generateForm = (fields: Array<I_Input>) => {
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
      {legend && (
        <Typography variant="h5" component="legend">
          {legend}
        </Typography>
      )}
      <Grid container spacing={2}>
        {generateForm(fields)}
        {submit}
      </Grid>
    </form>
  );
};

export default FormFactory;
