import React from "react";
import Modal from "components/Modal/Modal";
import FormFactory from "components/FormFactory/FormFactory";
import Button from "@material-ui/core/Button";
import AppContext from "contexts/AppContext";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const Onboarding = (props: Props) => {
  const { state } = React.useContext(AppContext);
  const profile = state.profile;
  const [firstname, setFirstame] = React.useState<string>();
  const [lastname, setLastname] = React.useState<string>();
  const [gender, setGender] = React.useState<string>();
  const [age, setAge] = React.useState<string>();
  const [height, setHeight] = React.useState<string>();
  const [weight, setWeight] = React.useState<string>();

  const fields = [
    {
      id: "Firstname",
      label: "Firstname",
      type: "text",
      onChange: (e: any) => {
        setFirstame(e.target.value);
      },
    },
    {
      id: "Lastname",
      label: "Lastname",
      type: "text",
      onChange: (e: any) => {
        setLastname(e.target.value);
      },
    },
    {
      id: "Gender",
      label: "Gender",
      type: "text",
      onChange: (e: any) => {
        setGender(e.target.value);
      },
    },
    {
      id: "age",
      label: "Age",
      type: "number",
      onChange: (e: any) => {
        setAge(e.target.value);
      },
    },
    {
      id: "height",
      label: "Height",
      type: "number",
      onChange: (e: any) => {
        setHeight(e.target.value);
      },
    },
    {
      id: "weight",
      label: "Weight",
      type: "number",
      onChange: (e: any) => {
        setWeight(e.target.value);
      },
    },
  ];

  const handleSubmit = () => {
    if (firstname && lastname && age && gender && height && weight) {
      profile.create({
        firstname: firstname,
        lastname: lastname,
        gender: gender,
        age: Number(age),
        height: Number(height),
      });
      profile.addWeight(Number(weight));
      props.handleClose();
    } else console.log("not ok");
    return;
  };

  return (
    <Modal isOpen={true} handleClose={() => {}}>
      <FormFactory
        legend="Oboarding"
        fields={fields}
        submit={
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Valider
          </Button>
        }
      />
    </Modal>
  );
};

export default Onboarding;
