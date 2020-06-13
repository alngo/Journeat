import React from "react";
import AppContext from "contexts/AppContext";
import Modal from "components/Modal/Modal";
import FormFactory from "components/FormFactory/FormFactory";
import Button from "@material-ui/core/Button";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const FormProfile = (props: Props) => {
  const {
    state: { profile },
  } = React.useContext(AppContext);

  const fields = [
    {
      id: "Firstname",
      label: "Firstname",
      type: "text",
      defaultValue: profile.firstname,
    },
    {
      id: "Lastname",
      label: "Lastname",
      type: "text",
      defaultValue: profile.lastname,
    },
    {
      id: "Gender",
      label: "Gender",
      type: "text",
      defaultValue: profile.gender,
    },
    {
      id: "age",
      label: "Age",
      type: "number",
      defaultValue: profile.age,
    },
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
