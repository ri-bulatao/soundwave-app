import React, { useRef, useState } from 'react'
import './DragAndDropInput.css'

interface DragAndDropInputProps {
  onFileChange: (file: File) => void
}

interface DragAndDropInputState {
  isDragging: boolean
}

const DragAndDropInput: React.FC<DragAndDropInputProps> = ({ onFileChange }) => {
  const [state, setState] = useState<DragAndDropInputState>({
    isDragging: false
  })
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (event: React.DragEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setState({ isDragging: true })
  }

  const handleDragLeave = (event: React.DragEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setState({ isDragging: false })
  }

  const handleDrop = (event: React.DragEvent<HTMLInputElement>): void => {
    event.preventDefault()
    const { files } = event.dataTransfer
    if (files.length > 0) {
      onFileChange(files[0])
    }
    setState({ isDragging: false })
  }

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div
      className={`drag-and-drop-input ${state.isDragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <img src='../src/assets/icons/add.png' alt='' onClick={handleClick} className='plus-icon' />
      <input
        type='file'
        accept='audio/*'
        onChange={(event: any) => { onFileChange(event.target.files?.[0]) }}
        hidden
        ref={inputRef}
      />
      <p onClick={handleClick}><strong>Click to upload</strong> or drag & drop</p>
      <span>MP3, MP4 - 10MB</span>
    </div>
  )
}

export default DragAndDropInput
