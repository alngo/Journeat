import React from "react";
import Graph from "./components/Graph";

const LineChart = () => {
  const canvas_ref = React.createRef<HTMLCanvasElement>();

  React.useEffect(() => {
    const resize_canvas = () => {
      let canvas = canvas_ref.current;
      if (canvas) {
        const parentElement = canvas.parentElement;
        if (parentElement) {
          canvas.width = parentElement.offsetWidth;
          canvas.height = parentElement.offsetHeight;
        }

        canvas.style.width = "100%";
        canvas.style.height = "100%";

        var ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.fillStyle = "green";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }
    };

    window.addEventListener("resize", resize_canvas);
    resize_canvas();
    return () => {
      window.removeEventListener("resize", resize_canvas);
    };
  });

  React.useEffect(() => {
    const canvas = canvas_ref.current;

    if (canvas) {
      let graph = new Graph(canvas);
    }
  });

  return <canvas ref={canvas_ref} width={100} height={100} />;
};

export default LineChart;
