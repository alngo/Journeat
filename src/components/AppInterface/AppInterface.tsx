import React from "react";
import AppBar from "components/AppBar/AppBar";
import AppDrawer from "components/AppDrawer/AppDrawer";

const AppInterface = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <AppBar isOpen={isOpen} setOpen={setOpen} />
      <AppDrawer isOpen={isOpen} setOpen={setOpen} />
    </React.Fragment>
  );
};

export default AppInterface;
