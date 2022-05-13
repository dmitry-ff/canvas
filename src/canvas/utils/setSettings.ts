import { VIEW } from "../helpers/data";

export function setSettings(
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>
) {
  if (canvasRef.current) {
    canvasRef.current.style.width = VIEW.width + "px";
    canvasRef.current.style.height = VIEW.height + "px";
    canvasRef.current.width = VIEW.dpiWidth;
    canvasRef.current.height = VIEW.dpiHeight;
  }
}
