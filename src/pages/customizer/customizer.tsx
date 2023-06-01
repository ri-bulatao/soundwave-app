import { AccordionInput } from './../../components/AccordionInput/AccordionInput'
import Canvas from './../../components/Canvas/Canvas'
import React from 'react'
import './customizer.css'

export const Customizer: React.FC = () => (
  <>
    <div className='template-container'>
      <div className='col-12 customizer-container'>
        <div className='col-4 input-container'>
            <AccordionInput />
        </div>
        <div className='col-8 canvas-container'>
            {/* <Canvas title = {'ENTER YOUR TITLE'} subtitle = {'Enter your subtitle here'} background = {''} canvasImage = {''} /> */}
            <Canvas />
        </div>
      </div>
    </div>
  </>

)
