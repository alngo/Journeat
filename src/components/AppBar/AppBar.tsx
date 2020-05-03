import React from "react";
import MUIAppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Slide from "@material-ui/core/Slide";

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

interface DrawerProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HideOnScroll = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 10,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const AppBar = (props: Props & DrawerProps) => {
  const { isOpen, setOpen, ...other } = props;
  return (
    <React.Fragment>
      <HideOnScroll {...other}>
        <MUIAppBar>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(!isOpen)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Journeat</Typography>
            <div />
          </Toolbar>
        </MUIAppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default AppBar;
