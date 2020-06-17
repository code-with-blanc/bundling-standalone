import React from 'react'

import TextArea from './TextArea';

const Result = ({
  bundled, transpiled
}) => {
  return (
    <div>
      <TextArea
        label="Bundled Code"
        text={bundled}
        rows={18}
      />
      <TextArea
        label="Transpiled Code"
        text={transpiled}
        rows={18}
      />
    </div>
  )
}

export default Result;
