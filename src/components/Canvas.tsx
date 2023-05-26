import React from "react";

interface CanvasProps {
  title: string
  subtitle: string
  background: string
  canvasImage: string
}
const Canvas: React.FC<CanvasProps> = ({ title, subtitle, background, canvasImage }) => (
  <>
    <div className="col-12 ">
      <div className="row">
        <h2>{ title }</h2>
        <p>{ subtitle }</p>
        <img src= { canvasImage } alt="" className="canvas-image" />
      </div>
    </div>
  </>
);

export default Canvas;
