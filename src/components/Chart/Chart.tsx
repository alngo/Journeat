import React from "react";
import Chartjs from "chart.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  canvas: {
    height: "100%",
  },
}));

const Chart = () => {
  const chartRef = React.createRef<HTMLCanvasElement>();
  const classes = useStyles();

  React.useEffect(() => {
    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext("2d");
      if (myChartRef) {
        new Chartjs(myChartRef, {
          type: "line",
          data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            plugins: {
              zoom: {
                pan: {
                  enabled: true,
                  mode: "xy",
                },
                zoom: {
                  enabled: true,
                  mode: "xy",
                },
              },
            },
          },
        });
      }
    }
  }, [chartRef]);

  return <canvas ref={chartRef} className={classes.canvas}></canvas>;
};

export default Chart;
