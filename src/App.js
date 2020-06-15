import React, {useState} from 'react';
import * as Babel from '@babel/standalone';

import Editor from './views/Editor.jsx';
import Result from './views/Result.jsx';

import './App.css';

const babelConfig = {
  presets: ['env'],
};

function App() {
  const [source, setSource] = useState('');
  const [compiled, setCompiled] = useState({});

  const compile = () => {
    const result = Babel.transform(source, babelConfig);

    setCompiled({
      source: result.code,
      map: result.map,
      ast: result.ast,
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
