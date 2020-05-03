import React from "react";
import Modal from "components/Modal/Modal";
import FormFactory from "components/FormFactory/FormFactory";
import Button from "@material-ui/core/Button";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const ChartCalorieForm = (props: Props) => {
  const fields = [
    { id: "food", label: "Aliment", type: "text" },
    { id: "quantity", label: "Quantité", type: "number" },
  ];

  return (
    <Modal {...props}>
      <FormFactory
        fields={fields}
        submit={
          <Button fullWidth variant="contained" color="primary">
            Ajouter
          </Button>
        }
      />
    </Modal>
  );
};

export default ChartCalorieForm;
