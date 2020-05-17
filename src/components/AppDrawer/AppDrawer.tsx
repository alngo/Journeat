import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import FormProfile from "components/FormProfile/FormProfile";
import FormSetting from "components/FormSetting/FormSetting";

interface Props {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppDrawer = (props: Props) => {
  const { isOpen, setOpen } = props;
  const [profile, setProfile] = React.useState(false);
  const [setting, setSetting] = React.useState(false);

  return (
    <SwipeableDrawer
      anchor={"left"}
      open={isOpen}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <List>
        <ListItem alignItems="center">
          <ListItemText primary={"Menu"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => setProfile(true)}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={"Profil"} />
        </ListItem>
        <ListItem button onClick={() => setSetting(true)}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Configuration"} />
        </ListItem>
      </List>
      <FormProfile isOpen={profile} handleClose={() => setProfile(false)} />
      <FormSetting isOpen={setting} handleClose={() => setSetting(false)} />
    </SwipeableDrawer>
  );
};

export default AppDrawer;
