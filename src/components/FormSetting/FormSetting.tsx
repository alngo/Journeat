import React from "react";
import Modal from "components/Modal/Modal";
import FormFactory from "components/FormFactory/FormFactory";
import Button from "@material-ui/core/Button";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const FormSetting = (props: Props) => {
  const fields = [{ id: "Dark", label: "Dark", type: "text" }];

  return (
    <Modal {...props}>
      <FormFactory
        legend="Settings"
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

export default FormSetting;
