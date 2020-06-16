import React, { useState } from 'react'

import TextArea from './TextArea';
import './Editor.css';

const initialCode1 = `\
import { value } from './source_2.js';

console.log('Hello World!');
console.log(value);
`;
const initialCode2 = `\
const value = 2;

export { value };
`;

const Editor = ({
  onCompile
}) => {
  const [source1, setSource1] = useState(initialCode1);
  const [source2, setSource2] = useState(initialCode2);

  return (
    <div>
      <TextArea
        label={"source_1.js"}
        text={source1}
        onChange={(v) => setSource1(v)}
      />

      <TextArea
        label={"source_2.js"}
        text={source2}
        onChange={(v) => setSource2(v)}
      />

      <button
        className="editor__compile"
        onClick={() => onCompile({
          sources: [source1, source2],
        })}
      > Compile </button>
    </div>
  )
}

export default Editor;
