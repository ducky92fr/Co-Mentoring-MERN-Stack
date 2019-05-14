import React from 'react'

const Upload = (props) => {
  return (
    <div>
      <label className ="label">Upload your avatar</label>
    <div className="file has-name is-small">
    <label className="file-label">
    <input className="file-input" type="file" name="selectedFile" onChange={e=> props.change(e)}/>
    <span className="file-cta">
      <span className="file-label">
        Choose a file…
      </span>
    </span>
    <span className="file-name">
      {props.selected}
    </span>
  </label>
</div>
{props.err ? <p className="help is-danger">{props.err}</p> :null}
<div>
      {props.fileName}
   </div>
</div>
  )
}
  

export default Upload