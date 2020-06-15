import React from 'react'

const Editor = ({
  text, setText
}) => {
  return (
    <div>
      <label for="code">Source</label>
      <textarea
        id = "source"
        type="text"
        value={text}
        onChange={(e) => {
          console.log(e);
        }}
      />
    </div>
  )
}

export default Editor;
