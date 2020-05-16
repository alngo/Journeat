import React from "react";
import Modal from "components/Modal/Modal";

const Onboarding = () => {
	return (
		<Modal isOpen={true} handleClose={() => console.log('coucou')}>
			<div>coucou</div>
		</Modal>
	)
}

export default Onboarding;
