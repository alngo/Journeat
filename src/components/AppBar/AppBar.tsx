import React from "react"
import MaterialAppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

interface Props {
    window?: () => Window;
    children?: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const AppBar = (props: Props) => {
    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <MaterialAppBar>
                    <Toolbar>
                        <Typography variant="h6">Journeat</Typography>
                    </Toolbar>
                </MaterialAppBar>
            </HideOnScroll>
        </React.Fragment>
    )
}

export default AppBar;