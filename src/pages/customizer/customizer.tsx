import Canvas from './../../components/Canvas/Canvas'
import React, { useCallback, useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import DragAndDropInput from '../../components/DragAndDropInput/DragAndDropInput'
import WaveCanvas from '../../components/WaveCanvas/WaveCanvas'
import { initialState } from '../../components/InitialState/InitialState'
import RadioButtonToggle from '../../components/RadioButtonToggle/RadioButtonToggle'
import LayoutSizing from '../../components/LayoutSizing/LayoutSizing'
import ColorTemplate from '../../components/ColorTemplate/ColorTemplate'
import './customizer.css'

export const Customizer: React.FC = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null)
  const [showFileSizeAlert, setShowFileSizeAlert] = useState<boolean>(false)
  const [audioFileName, setAudioFileName] = useState<string>('No Files Selected')
  const [selectedFrame, setSelectedFrame] = useState<string>('')
  const [selectedSizing, setSelectedSizing] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [canvasTitle, setCanvasTitle] = useState<string>('Enter your title')
  const [canvasSubtitle, setCanvasSubtitle] = useState<string>('Enter your subtitle here')

  const handleAudioChange = (file: File): void => {
    if (typeof file !== 'undefined' || file !== null) {
      const fileSizeInMB = file.size / (1024 * 1024)
      if (fileSizeInMB <= 10 && file.type.startsWith('audio/')) {
        setAudioFile(file)
        convertToAudioBuffer(file)
        setAudioFileName(file.name)
        setShowFileSizeAlert(false)
      } else {
        setShowFileSizeAlert(true)
        setAudioFile(null)
      }
    }
  }
  const convertToAudioBuffer = useCallback(
    (file: File): void => {
      if (typeof file === 'undefined') {
        return
      }
      const audioContext = new AudioContext()
      const fileReader = new FileReader()
      fileReader.readAsArrayBuffer(file)
      fileReader.onload = async () => {
        const arrayBuffer = await file.arrayBuffer()
        const audioBufferData = await audioContext.decodeAudioData(arrayBuffer)
        setAudioBuffer(audioBufferData)
      }
      console.log(audioBuffer)
    },
    [audioFile]
  )
  const resetAudioFile = (): void => {
    setAudioFile(null)
    setAudioBuffer(null)
    console.log('reset')
  }
  const handleFrameSelection = (value: string): void => {
    setSelectedFrame(value)
    console.log(value)
  }
  const handleSizingSelection = (value: string): void => {
    setSelectedSizing(value)
    console.log(value)
  }
  const handleColorSelection = (value: string): void => {
    setSelectedColor(value)
    console.log(value)
  }
  useEffect(
    () => {
      console.log(selectedColor)
      console.log(selectedFrame)
      console.log(selectedSizing)
      console.log(audioFile)
    },
    [audioFile, selectedFrame, selectedSizing]
  )
  return (
  <>
    <div className='template-container'>
      <div className='col-12 customizer-container'>
        <div className='col-4 input-container'>
        <Accordion defaultActiveKey={['0']} >
          <Accordion.Item eventKey='0'>
            <Accordion.Header className={`upload-header ${ audioBuffer && 'file-uploaded'}`}><div className='upload-header'><div><img src='src/assets/icons/upload.png' alt='icon' /> Upload </div><p className='upload-desc'>Upload yuor media to continue:</p></div></Accordion.Header>
            <Accordion.Body>
              <div className='accordion-upload-container'>

                {(audioBuffer !== null) &&
                  <div className='upload-wave-container'>
                    <WaveCanvas id='acc_sound_wave' waveHeight={initialState.waveHeight} audioBuffer={audioBuffer} width={initialState.canvasWidth} height={initialState.canvasHeight} />
                    <div className='filename'>
                      <img src='src/assets/icons/play-icon.png' alt='' />
                      <p className='audio-name'>{audioFileName}</p>
                      <img src='src/assets/icons/delete-icon.png' onClick={resetAudioFile} alt='' />
                    </div>
                  </div>}
                {(audioBuffer === null) && <div className='upload-container'><DragAndDropInput onFileChange={handleAudioChange} /></div>}
              </div>
              {(showFileSizeAlert) &&
                <div className='alert-container'>
                  <p><img src='src/assets/icons/Check_ring_light.png' alt='' />{'Media size should not exceed 10MB.'}</p>
                </div>
              }
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header className={`material-and-sizing-header ${ (selectedFrame && selectedSizing && audioBuffer) && 'material-sizing-selected'}`} ><img src='src/assets/icons/material-sizing.png' alt='icon' /> Material & Sizing</Accordion.Header>
            <Accordion.Body>
              <div className="material-and-sizing-container">
                <p>Frame Type</p>
                <RadioButtonToggle options={initialState.frameOptions} handleFrameSelection={handleFrameSelection}/>
                <p>Size</p>
                <LayoutSizing options={initialState.sizingOptions} handleSizingSelection={handleSizingSelection}/>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header><img src='src/assets/icons/preview.png' alt='icon' /> Order Review</Accordion.Header>
            <Accordion.Body>
             <ul className="order-preview-container">
              <li className="order-item">
                ORIENTATION<strong>{"Landscapre"}</strong>
              </li>
              <li className="order-item">
                FRAME TYPE<strong>{selectedFrame}</strong>
              </li>
              <li className="order-item">
                SIZE<strong>{selectedSizing}</strong>
              </li>
              <li className="order-item">
                TOTAL PRICE<strong>{"€50.00"}</strong>
              </li>
             </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
        <div className='col-8 canvas-container'>
          <div className='canvas-component'>
          <div className='canvas-header'>
            <p>Landscape Image Background Template</p><img src='src/assets/icons/header-icon.png' alt='' />
          </div>
          <div className={`canvas-content ${ selectedColor }`}>
            <div className="canvas-text title">
              <h1>{ canvasTitle }</h1>
            </div>
            <div className="canvas-text subtitle">
              <h1>{ canvasSubtitle }</h1>
            </div>
            <div className="canvas-soundwave">
            {(audioBuffer !== null) ?
            <WaveCanvas id='canvas-canvas' waveHeight={initialState.waveHeight} audioBuffer={audioBuffer} width={initialState.canvasWidth} height={initialState.canvasHeight} />
            : <div className="temp-canvas-image"><img src="src/assets/img/soundwave.png" alt="" /></div>
            }
            </div>
          </div>
          <div className='canvas-footer desktop'>
            <ColorTemplate options={initialState.colorOptions} handleColorSelection={handleColorSelection}/>
          </div>
          <div className='canvas-footer mobile'>
            <ColorTemplate options={initialState.colorOptionsMobile} handleColorSelection={handleColorSelection}/>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  </>
  )
}
