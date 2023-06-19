import React from 'react'
import './index.scss'

const TitleEditor: React.FC = () => {

  return (
    <div className="sidecontainer">
      <div className="title-container">
        <div className="title">Title Customization</div>
        <div className="subtitle">Style title of your soundwave art</div>
      </div>
      <div className="form-container">
        {/* Title text */}
        <div className="group-input">
          <label htmlFor="title" className="control-label">Title</label>
          <input type="text" className="form-input" placeholder='ENTER YOUR TITLE' />
        </div>
        {/* Font family */}
        <div className="group-input">
          <label htmlFor="fontFamily" className="control-label">Font family</label>
          <select name="fontFamily" id="fontFamily" className="select-input">
            <option value="Arial">Arial</option>
            <option value="Cormorant">Cormorant</option>
            <option value="Roman">Roman</option>
          </select>
        </div>
        <div className="group-half">
          {/* Font weight */}
          <div className="group-input">
            <label htmlFor="fontWeight" className="control-label">Font Weight</label>
            <select name="fontWeight" id="fontWeight" className="select-input">
              <option value="300">Light</option>
              <option value="500">Normal</option>
              <option value="600">Semibold</option>
              <option value="800">Bold</option>
            </select>
          </div>

          {/* Font size */}
          <div className="group-input">
            <label htmlFor="fontWeight" className="control-label">Font Size</label>
            <select name="fontWeight" id="fontWeight" className="select-input">
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="26">26</option>
              <option value="28">28</option>
              <option value="32">32</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleEditor
