import React from "react";
import Box from "@material-ui/core/Box";
import FHPaper from "components/FHPaper/FHPaper";
import ChartWeightForm from "components/ChartWeightForm/ChartWeightForm";
import LineChart from "components/LineChart/LineChart";

interface Props {
  height: string;
}

const ChartWeight = (props: Props) => {
  const [isOpen, setOpen] = React.useState(false);
  const { height } = props;

  return (
    <Box my={2} height={height}>
      <FHPaper onDoubleClick={() => setOpen(true)}>
        <LineChart />
      </FHPaper>
      <ChartWeightForm isOpen={isOpen} handleClose={() => setOpen(false)} />
    </Box>
  );
};

export default ChartWeight;
