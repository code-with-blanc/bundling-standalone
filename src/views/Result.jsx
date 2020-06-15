import React from 'react'

const Result = ({
  code, sourceMap, ast
}) => {
  return (
    <div>
      <pre>{code}</pre>
      <pre>{sourceMap}</pre>
      <pre>{ast}</pre>
    </div>
  )
}

export default Result;
