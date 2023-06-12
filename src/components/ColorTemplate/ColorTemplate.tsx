import React, { useState } from 'react'
import './ColorTemplate.css'

interface ToggleButtonProps {
  options: Array<{ key: string, image: string, view: string }>
  handleColorSelection: (value: string) => void
  onImageClick: (event: Event) => void
}

const ColorTemplate: React.FC<ToggleButtonProps> = ({ options, handleColorSelection, onImageClick }) => {
  const [selectedOption, setSelectedOption] = useState('option_0')
  const handleOptionChange = (value: { key: string, view: string }): any => {
    setSelectedOption(value.key)
    handleColorSelection(`${value.view.toString()} ${value.key.toString()}`)
    onImageClick(value)
  }
  return (
    <>
      <div className='template-color'>
        {options.map((option: { key: string, view: string }) => (
          <label className={`col-3 frame-color-selection frame-color ${option.view}  ${selectedOption === option.key ? 'active' : ''}`} key={option.key}>
            <input
              type="radio"
              value={option.key}
              checked={selectedOption === option.key}
              onChange={() => handleOptionChange(option)}
            />
            <img src={option.image} alt={option.key} />
          </label>
        ))}
      </div>
    </>
  )
}

export default ColorTemplate
