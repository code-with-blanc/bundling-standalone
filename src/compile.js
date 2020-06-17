import * as Babel from '@babel/standalone';
import * as rollup from 'rollup';
import virtual from '@rollup/plugin-virtual';

export function babelTranspile(source) {
  const babelConfig = {
    presets: ['env'],
  };

  console.log('Begin babel');
  const result = Babel.transform(source, babelConfig);
  console.log('End babel');

  return result.code;
};

export async function rollupBundle(sources) {
  // We use @rollup/plugin-virtual to load the sources in-memory
  const inputOptions = {
    input: 'source_1.js',
    plugins: [
      virtual({
        'source_1.js': sources[0],
        'source_2.js': sources[1],
      })
    ],
  };
  const outputOptions = {};

  // create a bundle
  console.log('Begin rollup')
  const bundle = await rollup.rollup(inputOptions);

  // generate output specific code in-memory
  // you can call this function multiple times on 
  // the same bundle object
  const { output } = await bundle.generate(outputOptions);

  console.log('End rollup')
  return output[0].code;
};

