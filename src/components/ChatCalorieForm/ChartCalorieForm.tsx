import React from "react";
import Modal from "components/Modal/Modal";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const ChartCalorieForm = (props: Props) => {
  return (
    <Modal {...props}>
      <div>CalorieForm</div>
    </Modal>
  );
};

export default ChartCalorieForm;
