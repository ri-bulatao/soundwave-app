import React from "react";
import "./Canvas.css"

// interface CanvasProps {
//   title: string
//   subtitle: string
//   background: string
//   canvasImage: string
// }
// { title, subtitle, background, canvasImage }
const Canvas: React.FC = () => (
  <>
    <div className="canvas-component">
      <div className="canvas-header">
        <p>Landscape Image Background Template</p><img src="src/assets/icons/header-icon.png" alt="" />
      </div>
      <div className="canvas-content"></div>
      <div className="canvas-footer">
        <div className="row">
          <div className="col-3 active">
            <img src="soundwave-app/src/assets/img/first.png" alt="" />
          </div>
        </div>
      </div>
    </div>  
  </>
);

export default Canvas;
