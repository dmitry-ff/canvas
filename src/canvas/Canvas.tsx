import React, { useEffect, useRef } from "react";
import * as Styled from "./Canvas.styled";
import { setSettings, drawCurve, drawGrid } from "./utils";
import { arrayOfRects } from "./helpers/data";

function Canvas() {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const ctx = useRef<null | CanvasRenderingContext2D>(null);

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext("2d");
      setSettings(canvasRef);
      drawGrid(ctx);
    }
  });

  return (
    <div>
      <Styled.Canvas ref={canvasRef}>
        Sorry, but your browser don`t support canvas element
      </Styled.Canvas>
    </div>
  );
}

export default Canvas;
