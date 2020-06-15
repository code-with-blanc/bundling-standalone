import React, {useState} from 'react';

import Editor from './views/Editor.jsx';
import Result from './views/Result.jsx';

import './App.css';

function App() {
  const [source, setSource] = useState('');
  const [compiled, setCompiled] = useState({});

  const compile = () => {
    console.log('definetly did compile!');
  
    setCompiled({
      source: 'Source',
      map: 'A beautiful map',
      ast: 'An amazing AST'
    });
  }

  return (
    <div className="App">
      <div className="area-input">
        <Editor
          text={source}
          onChange={(v) => setSource(v)}
          onCompile={compile}
        />
      </div>
      <div className="area-output">
        <Result
          code={compiled.source}
          sourceMap={compiled.map}
          ast={compiled.ast}
        />
      </div>
    </div>
  );
}

export default App;
