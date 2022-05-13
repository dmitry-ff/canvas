import { TContextCanvas } from "../helpers/types";

export function drawTriagle(ctx: TContextCanvas) {
  if (ctx.current) {
    const { current } = ctx;

    current.beginPath();
    current.moveTo(25, 25);
    current.lineTo(105, 25);
    current.lineTo(25, 105);
    current.fill(); //closePath не требуется, если использовать fill

    current.beginPath();
    current.moveTo(125, 125);
    current.lineTo(125, 45);
    current.lineTo(45, 125);
    current.closePath();
    current.stroke();
  }
}
