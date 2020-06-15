import React from 'react'

import TextArea from './TextArea';

import './Editor.css';

const Editor = ({
  text, setText
}) => {
  return (
    <div>
      <TextArea
        text={text}
        onChange={setText}
      />
    </div>
  )
}

export default Editor;
