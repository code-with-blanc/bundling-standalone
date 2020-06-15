import React from 'react'

import TextArea from './TextArea';

import './Editor.css';

const Editor = ({
  text, onChange, onCompile
}) => {
  return (
    <div>
      <TextArea
        text={text}
        onChange={onChange}
      />
      <button
        className="editor__compile"
        onClick={onCompile}
      > Compile </button>
    </div>
  )
}

export default Editor;
