import React from 'react'

import './TextArea.css';

const TextArea = ({
  text, onChange, label
}) => {
  return (
    <div className="textarea__div">
      <div className="textarea__label">
        <label htmlFor="code">{label || "textarea"}</label>
      </div>
      <textarea
        id = "source"
        className="textarea__textarea"
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default TextArea;
