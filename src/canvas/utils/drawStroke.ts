import { TContextCanvas, TRectParams } from "../helpers/types";

const defaultStroke = {
  x: 30,
  y: 10,
  width: 55,
  height: 50,
  color: "rgb(0,0,0)",
};

export function drawStroke(
  ctx: TContextCanvas,
  params: TRectParams = defaultStroke
) {
  if (ctx.current) {
    const { current } = ctx;
    current.beginPath();
    current.strokeStyle = params.color;
    current.strokeRect(params.x, params.y, params.width, params.height);
    current.closePath();
  }
}
