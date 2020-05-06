class Graph {
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  clear_canvas = () => {
    let context = this.canvas.getContext("2d");
    if (context) {
      context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  };

  draw = () => {
    var ctx = this.canvas.getContext("2d");

    if (ctx) {
      ctx.fillStyle = "green";
      ctx.fillRect(10, 10, this.canvas.width, this.canvas.height);
    }
  };
}

export default Graph;
