import React from "react";
import Modal from "components/Modal/Modal";
import FormFactory from "components/FormFactory/FormFactory";
import Button from "@material-ui/core/Button";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const ChartWeightForm = (props: Props) => {
  const fields = [{ id: "weight", label: "Poid", type: "number" }];

  return (
    <Modal {...props}>
      <FormFactory
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

export default ChartWeightForm;
