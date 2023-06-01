import React, { useState } from 'react'
import './ColorTemplate.css'

interface ToggleButtonProps {
  options: Array<{ key: string, image: string }>
  handleColorSelection: (value: string) => void
}

const ColorTemplate: React.FC<ToggleButtonProps> = ({ options, handleColorSelection }) => {
  const [selectedOption, setSelectedOption] = useState('option_1')
  const handleOptionChange = (value: string): any => {
    setSelectedOption(value)
    handleColorSelection(value)
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
