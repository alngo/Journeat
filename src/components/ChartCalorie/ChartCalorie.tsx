import React from "react";
import Box from "@material-ui/core/Box";
import FHPaper from "components/FHPaper/FHPaper";

interface Props {
  height: string;
}

const ChartCalorie = (props: Props) => {
  const { height } = props;
  return (
    <Box my={2} height={height}>
      <FHPaper>
        <div>Calorie</div>
      </FHPaper>
    </Box>
  );
};

export default ChartCalorie;
