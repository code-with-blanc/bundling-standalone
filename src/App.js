import React, {useState} from 'react';

import Editor from './views/Editor.jsx';
import Result from './views/Result.jsx';
import ErrorView from './views/ErrorView.jsx';

import { babelTranspile } from './compile.js';

import './App.css';

function App() {
  const [result, setResult] = useState({});
  const [compilationError, setCompilationError] = useState(undefined);

  const compile = ({ sources }) => {
    setCompilationError(null);

    try {
      setResult({
        source: babelTranspile(sources),
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
