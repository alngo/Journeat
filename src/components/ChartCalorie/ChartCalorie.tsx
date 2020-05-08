import React from "react";
import Box from "@material-ui/core/Box";
import FHPaper from "components/FHPaper/FHPaper";
import FormCalorie from "components/FormCalorie/FormCalorie";
import Chart from "components/Chart/Chart";

interface Props {
  height: string;
}

const ChartCalorie = (props: Props) => {
  const [isOpen, setOpen] = React.useState(false);
  const { height } = props;

  return (
    <Box my={2} height={height}>
      <FHPaper onDoubleClick={() => setOpen(true)}>
        <Chart />
      </FHPaper>
      <FormCalorie isOpen={isOpen} handleClose={() => setOpen(false)} />
    </Box>
  );
};

export default ChartCalorie;
