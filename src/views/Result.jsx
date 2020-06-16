import React from 'react'

import TextArea from './TextArea';

const Result = ({
  code
}) => {
  return (
    <div>
      <TextArea
        label="Compiled Code"
        text={code}
        rows={30}
      />
    </div>
  )
}

export default Result;
