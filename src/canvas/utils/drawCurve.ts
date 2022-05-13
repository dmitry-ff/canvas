import { TContextCanvas } from "../helpers/types";

export function drawCurve(ctx: TContextCanvas) {
  if (ctx.current) {
    const { current } = ctx;

    current.beginPath();
    current.moveTo(20, 110);
    current.quadraticCurveTo(230, 150, 250, 20);
    current.stroke();
  }
}
