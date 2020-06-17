import React, {useState} from 'react';

import Editor from './views/Editor.jsx';
import Result from './views/Result.jsx';
import ErrorView from './views/ErrorView.jsx';

import { rollupTranspile } from './compile.js';

import './App.css';

const STATE_SUCCESS = 'success';
const STATE_COMPILING = 'compiling';
const STATE_ERROR = 'error';

function App() {
  const [result, setResult] = useState({});
  const [appState, setAppState] = useState(STATE_SUCCESS);

  const compile = async ({ sources }) => {
    setAppState(STATE_COMPILING);

    try {
      setResult({
        source: await rollupTranspile(sources),
      });
      setAppState(STATE_SUCCESS);
    } catch(e) {
      console.log(e);
      setResult({ error: e });
      setAppState(STATE_ERROR);
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
          appState === STATE_SUCCESS ? (
            <Result
              code={result.source}
            />
          ) : null
        }
        {
          appState === STATE_ERROR ? (
            <ErrorView
              error={result.error}
            />
          ) : null
        }
        {
          appState === STATE_COMPILING ? (
            <div>
              Compiling...
            </div>
          ) : null
        }
      </div>
    </div>
  );
}

export default App;
