import React, { useState } from 'react'
import ColorTemplate from '../ColorTemplate/ColorTemplate'
import { initialState } from './../InitialState/InitialState'
import './Canvas.css'

// interface CanvasProps {
//   title: string
//   subtitle: string
//   background: string
//   canvasImage: string
// }
// { title, subtitle, background, canvasImage }

const Canvas: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('Frame')
  const handleFrameSelection = (value: string): void => {
    setSelectedColor(value)
    console.log(value)
  }
  return (
    <>
      <div className='canvas-component'>
        <div className='canvas-header'>
          <p>Landscape Image Background Template</p><img src='src/assets/icons/header-icon.png' alt='' />
        </div>
        <div className='canvas-content'></div>
        <div className='canvas-footer desktop'>
          <ColorTemplate options={initialState.colorOptions} handleFrameSelection={handleFrameSelection}/>
        </div>
        <div className='canvas-footer mobile'>
          <ColorTemplate options={initialState.colorOptionsMobile} handleFrameSelection={handleFrameSelection}/>
        </div>
      </div>
    </>
  )
}

export default Canvas
