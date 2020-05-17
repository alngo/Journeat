import React from "react";
import Modal from "components/Modal/Modal";
import FormFactory from "components/FormFactory/FormFactory";
import Button from "@material-ui/core/Button";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const FormWeight = (props: Props) => {
  const fields = [{ id: "weight", label: "Poids", type: "number" }];

  return (
    <Modal {...props}>
      <FormFactory
        legend="Weight"
        fields={fields}
        submit={
          <Button fullWidth variant="contained" color="primary">
            Valider
          </Button>
        }
      />
    </Modal>
  );
};

export default FormWeight;
