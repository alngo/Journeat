import React from "react";
import MUIModal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  children?: React.ReactElement;
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2, 4, 3),
  },
}));

const Modal = (props: Props) => {
  const { isOpen, handleClose, children } = props;
  const classes = useStyles();
  return (
    <MUIModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 250,
      }}
      disableAutoFocus
      disableEnforceFocus
    >
      <Fade in={isOpen}>
        <Paper className={classes.paper}>{children}</Paper>
      </Fade>
    </MUIModal>
  );
};

export default Modal;
