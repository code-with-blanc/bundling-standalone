import * as Babel from '@babel/standalone';
// import rollup from 'rollup';

export function babelTranspile(sources) {
  const babelConfig = {
    presets: ['env'],
    generatorOpts: {
      sourceMaps: true,
    }
  };

  let output = '';

  sources.forEach((src, i) => {
    output += `//// Transpiled sources[${i}]\n\n`;
    output += Babel.transform(src, babelConfig).code;
    output += '\n\n\n\n';
  });

  return output;
};

export function rollupTranspile() {

};
