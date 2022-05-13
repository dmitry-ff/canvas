import { TContextCanvas } from "../helpers/types";
import { drawArcs } from ".";

export function drawGrid(ctx: TContextCanvas) {
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      const color = `rgba(0, ${Math.floor(255 - 42.5 * i)}, ${Math.floor(
        255 - 42.5 * j
      )})`;
      drawArcs(ctx, j * 25, i * 25, color);
    }
  }
}
