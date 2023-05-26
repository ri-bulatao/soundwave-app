import { AccordionInput } from "../AccordionInput";
import Canvas from "../Canvas";
import React from "react";

export const Home: React.FC = () => (
  <>
    <div className="template-container">
      <div className="col-12">
        <div className="row">
          <div className="col-4">
            <AccordionInput id = { "hello" } />
          </div>
          <div className="col-8">
            {/* The Image src/components/assets/soundwave.png */}
            <Canvas title = {"ENTER YOUR TITLE"} subtitle = {"Enter your subtitle here"} background = {""} canvasImage = {""} />
          </div>
        </div>
      </div>
    </div>
  </>

);
