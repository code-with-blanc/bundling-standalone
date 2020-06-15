import React from 'react'

import TextArea from './TextArea';

const format = (value) => {
  if (typeof(value) === typeof('') || value instanceof String) {
    return value
  }

  return JSON.stringify(value, null, 2);
};

const Result = ({
  code, sourceMap, ast
}) => {
  return (
    <div>
      <TextArea text={format(code)} label="Code"/>
      <TextArea text={format(sourceMap)} label="Source Map"/>
      <TextArea text={format(ast)} label="AST"/>
    </div>
  )
}

export default Result;
