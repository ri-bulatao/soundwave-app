import { AccordionInput } from './../../components/AccordionInput/AccordionInput'
import Canvas from './../../components/Canvas/Canvas'
import React from 'react'
import './customizer.css'

export const Customizer: React.FC = () => (
  <>
    <div className='template-container'>
      <div className='col-12'>
        <div className='row'>
          <div className='col-4'>
            <div className='customizer-tool-container'>
              <AccordionInput />
            </div>
          </div>
          <div className='col-8'>
            <div className='canvas-container'>
              {/* <Canvas title = {'ENTER YOUR TITLE'} subtitle = {'Enter your subtitle here'} background = {''} canvasImage = {''} /> */}
              <Canvas />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

)
