import React, {useState} from 'react';
import * as Babel from '@babel/standalone';

import Editor from './views/Editor.jsx';
import Result from './views/Result.jsx';
import ErrorView from './views/ErrorView.jsx';

import './App.css';

const initialCode = `console.log('Hello World!');`;
const babelConfig = {
  presets: ['env'],
  generatorOpts: {
    sourceMaps: true,
  }
};

function App() {
  const [source, setSource] = useState(initialCode);
  const [compiled, setCompiled] = useState({});
  const [compilationError, setCompilationError] = useState(undefined);

  const compile = () => {
    setCompilationError(false);

    try {
      const result = Babel.transform(source, babelConfig);
      console.log(result);
  
      setCompiled({
        source: result.code,
        map: result.map,
        ast: result.ast,
      });
    } catch(e) {
      console.log(e);
      setCompilationError(e);
    }
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
        {
          !compilationError ? (
            <Result
              code={compiled.source}
              sourceMap={compiled.map}
              ast={compiled.ast}
            />
          ) : (
            <ErrorView
              error={compilationError}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
