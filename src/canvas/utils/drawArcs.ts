import { TContextCanvas } from "../helpers/types";

export function drawArcs(
  ctx: TContextCanvas,
  x: number,
  y: number,
  color: string
) {
  if (ctx.current) {
    const { current } = ctx;
    current.beginPath();
    current.strokeStyle = color;
    current.arc(x, y, 10, 0, Math.PI * 2);
    current.stroke();
    current.closePath();
  }
}
