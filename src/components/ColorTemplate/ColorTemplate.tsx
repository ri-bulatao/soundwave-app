import React, { useState } from 'react'
import './ColorTemplate.css'

interface ToggleButtonProps {
  options: Array<{ key: string, image: string }>
  handleFrameSelection: (value: string) => void
}

const ColorTemplate: React.FC<ToggleButtonProps> = ({ options, handleFrameSelection }) => {
  const [selectedOption, setSelectedOption] = useState('')
  
  const handleOptionChange = (value: string): any => {
    setSelectedOption(value)
    handleFrameSelection(value)
  }
  return (
    <>
        <div className='template-color'>
            {options.map((option: any) => (
                <label className={`col-3 frame-color-selection frame-color ${selectedOption === option.key && 'active'}`} key={option.key}>
                <input
                    type="radio"
                    value={option.key}
                    checked={selectedOption === option.key}
                    onChange={() => handleOptionChange(option.key)}
                />
                <img src={option.image} alt={option.key} />
                </label>
            ))}
        </div>
    </>
  )
}

export default ColorTemplate
