import React from 'react';

import Editor from './views/Editor.jsx';
import Result from './views/Result.jsx';

import './App.css';

let source = "";

const setText = (value) => {
  source = value;
}

function App() {
  return (
    <div className="App">
      <div className="area-input">
        <Editor text={source} />
        <button> Compile </button>
      </div>
      <div className="area-output">
        <Result
          code="code"
          sourceMap="map"
          ast="ast"
        />
      </div>
    </div>
  );
}

export default App;
