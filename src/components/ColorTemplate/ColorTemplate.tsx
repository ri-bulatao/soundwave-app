import React, { useEffect, useState } from 'react'
import './ColorTemplate.css'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { setColors } from '../../redux/reducers/listing'
import { setColor } from '../../redux/reducers/selected'
import { toggleEditBackground } from '../../redux/reducers/controls'

interface ToggleButtonProps {
  view: string
}

const ColorTemplate: React.FC<ToggleButtonProps> = ({ view = 'desktop' }) => {
  const { colors } = useSelector((state: RootState) => state.listing.listing)
  const { color } = useSelector((state: RootState) => state.selected.selected)
  const dispatch = useDispatch()

  const fetchColors = (): void => {
    fetch('/src/data/colors.json')
      .then(res => res.json())
      .then(data => dispatch(setColors(data)))
      .catch(err => console.log(err))
  }

  const handleOptionChange = (option: any): void => {
    dispatch(setColor(option))
    dispatch(toggleEditBackground(true))
  }

  useEffect(() => {
    fetchColors()
  }, [])

  // const handleOptionChange = (value: Event): void => {
  //   setSelectedOption(value.key)
  //   handleColorSelection(value.view.concat(' ').concat(value.key))
  //   onImageClick(value)
  // }
  return (
    <>
        <div className='template-color'>
            {colors.map((option) => {
              return view === option.view
                ? <label className={`col-3 frame-color-selection frame-color ${option.view} ${color.id === option.id ? 'active' : ''}`} key={option.id}>
                    <input
                      type="radio"
                      value={option.key}
                      checked={color.id === option.id}
                      onChange={() => handleOptionChange(option)} />
                    <img src={option.image} alt={option.key} />
                </label>
                : null
            })}
        </div>
    </>
  )
}

export default ColorTemplate
