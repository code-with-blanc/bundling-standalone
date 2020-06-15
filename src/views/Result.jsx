import React from 'react'

import TextArea from './TextArea';

const Result = ({
  code, sourceMap, ast
}) => {
  return (
    <div>
      <TextArea text={code} label="Code"/>
      <TextArea text={sourceMap} label="Source Map"/>
      <TextArea text={ast} label="AST"/>
    </div>
  )
}

export default Result;
