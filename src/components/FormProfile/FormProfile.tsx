import React from "react";
import Modal from "components/Modal/Modal";
import FormFactory from "components/FormFactory/FormFactory";
import Button from "@material-ui/core/Button";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const FormProfile = (props: Props) => {
  const fields = [
    { id: "Firstname", label: "Firstname", type: "text" },
    { id: "Lastname", label: "Lastname", type: "text" },
    { id: "weight", label: "Age", type: "number" },
    { id: "weight", label: "Poids", type: "number" },
  ];

  return (
    <Modal {...props}>
      <FormFactory
        legend="Profile"
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

export default FormProfile;
