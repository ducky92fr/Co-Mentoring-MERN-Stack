import React from 'react'

const Upload = (props) => {
  return (
    <div className="file has-name">
  <label className="file-label">
    <input className="file-input" type="file" name="resume"/>
    <span className="file-cta">
      <span className="file-icon">
        <i className="fas fa-upload"></i>
      </span>
      <span className="file-label">
        Choose a file…
      </span>
    </span>
    <span className="file-name">
      Screen Shot 2017-07-29 at 15.54.25.png
    </span>
  </label>
</div>
  )
}
  

export default Upload