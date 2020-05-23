import React from "react";
import Modal from "components/Modal/Modal";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const Onboarding = (props: Props) => {
  const { isOpen } = props;
  return (
    <Modal isOpen={isOpen} handleClose={() => {}}>
      <div>coucou</div>
    </Modal>
  );
};

export default Onboarding;
