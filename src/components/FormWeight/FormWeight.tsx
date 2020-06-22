import React from "react";
import Modal from "components/Modal/Modal";
import FormFactory from "components/FormFactory/FormFactory";
import Button from "@material-ui/core/Button";
import AppContext from "contexts/AppContext";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const FormWeight = (props: Props) => {
  const {
    state: { profile },
  } = React.useContext(AppContext);
  const [weight, setWeight] = React.useState<number>(0);
  const fields = [
    {
      id: "weight",
      label: "Poids",
      type: "number",
      onChange: (e: any) => {
        setWeight(e.target.value);
      },
    },
  ];

  return (
    <Modal {...props}>
      <FormFactory
        legend="Weight"
        fields={fields}
        submit={
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              profile.addWeight(weight);
              props.handleClose();
            }}
          >
            Valider
          </Button>
        }
      />
    </Modal>
  );
};

export default FormWeight;
