import { TRectParams, TContextCanvas } from "../helpers/types";

const defaultRect = {
  x: 30,
  y: 10,
  width: 55,
  height: 50,
  color: "rgb(0,0,0)",
};

export function clearRect(
  ctx: TContextCanvas,
  params: TRectParams = defaultRect
) {
  if (ctx.current) {
    const { current } = ctx;
    current.fillStyle = params.color;
    current.clearRect(params.x, params.y, params.width, params.height);
  }
}
