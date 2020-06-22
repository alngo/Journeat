import React from "react";
import Modal from "components/Modal/Modal";
import FormFactory from "components/FormFactory/FormFactory";
import Button from "@material-ui/core/Button";
import AppContext from "contexts/AppContext";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const FormCalorie = (props: Props) => {
  const {
    state: { profile },
  } = React.useContext(AppContext);
  const [foodId, setFoodId] = React.useState<number>(0);
  const [amount, setAmount] = React.useState<number>(0);
  const fields = [
    {
      id: "food",
      label: "Aliment",
      type: "text",
      onChange: (e: any) => setFoodId(e.target.value),
    },
    {
      id: "amoutn",
      label: "Quantité",
      type: "number",
      onChange: (e: any) => setAmount(e.target.value),
    },
  ];

  return (
    <Modal {...props}>
      <FormFactory
        legend="Calorie"
        fields={fields}
        submit={
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              profile.addIntake(foodId, amount);
              props.handleClose();
            }}
          >
            Ajouter
          </Button>
        }
      />
    </Modal>
  );
};

export default FormCalorie;
