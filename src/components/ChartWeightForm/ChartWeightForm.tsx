import React from "react";
import Modal from "components/Modal/Modal";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const ChartWeightForm = (props: Props) => {
  return (
    <Modal {...props}>
      <div>WeightForm</div>
    </Modal>
  );
};

export default ChartWeightForm;
