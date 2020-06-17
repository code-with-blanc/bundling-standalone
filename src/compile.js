import * as Babel from '@babel/standalone';
import * as rollup from 'rollup';
import virtual from '@rollup/plugin-virtual';

export function babelTranspile(sources) {
  const babelConfig = {
    presets: ['env'],
  };

  let output = [];

  sources.forEach((src, i) => {
    console.log(`[${i}] Begin transpile`)
    output.push(Babel.transform(src, babelConfig).code);
    console.log(`[${i}] End transpile`)
  });
  
  return output;
};

export async function rollupBundle(sources) {
  const inputOptions = {
    input: 'source_1.js',
    plugins: [
      virtual({
        'source_1.js': sources[0],
        'source_2.js': sources[1],
      })
    ],
  };
  const outputOptions = {
    plugins: [
    ]
  };

  console.log('Begin rollup')
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  // generate output specific code in-memory
  // you can call this function multiple times on 
  // the same bundle object
  const { output } = await bundle.generate(outputOptions);

  console.log('End rollup')

  return output[0].code;
};

