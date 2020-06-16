import React, {useState} from 'react';
import * as Babel from '@babel/standalone';

import Editor from './views/Editor.jsx';
import Result from './views/Result.jsx';
import ErrorView from './views/ErrorView.jsx';

import './App.css';

const babelConfig = {
  presets: ['env'],
  generatorOpts: {
    sourceMaps: true,
  }
};

function App() {
  const [result, setResult] = useState({});
  const [compilationError, setCompilationError] = useState(undefined);

  const compile = ({ sources }) => {
    setCompilationError(false);

    try {
      const result = Babel.transform(sources[0], babelConfig);
      console.log(result);
  
      setResult({
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
          onCompile={compile}
        />
      </div>
      <div className="area-output">
        {
          !compilationError ? (
            <Result
              code={result.source}
              sourceMap={result.map}
              ast={result.ast}
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
