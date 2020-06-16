import React from 'react'

import './TextArea.css';

const format = (value) => {
  if (typeof(value) === typeof('') || value instanceof String) {
    return value
  }

  return JSON.stringify(value, null, 2);
};

const TextArea = ({
  text, onChange, label, rows
}) => {
  return (
    <div className="textarea__div">
      <div className="textarea__label">
        <label htmlFor="code">{label || ""}</label>
      </div>
      <textarea
        id = "source"
        className="textarea__textarea"
        rows={rows}
        value={format(text)}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default TextArea;
