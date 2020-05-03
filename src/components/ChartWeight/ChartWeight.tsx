import React from "react";
import Box from "@material-ui/core/Box";
import FHPaper from "components/FHPaper/FHPaper";

interface Props {
  height: string;
}

const ChartWeight = (props: Props) => {
  const { height } = props;
  return (
    <Box my={2} height={height}>
      <FHPaper>
        <div>Weight</div>
      </FHPaper>
    </Box>
  );
};

export default ChartWeight;
