# Bundling and transpiling code on the browser

When developing modern js for the web, it is desirable to depend on other developers' code and to make our code run on a wide variety of browsers.

Node.js provides require() as a means of using modules. ES6 defines modules which are supported in most but not all browsers.

Usually, in a development environment, a bundler such as webpack, parcel or rollup.js is used to transpile the code (translate from a newer version of ECMAScript to ES5) and to join all the modules in a single file, outputing a single whose syntax is widely supported across browsers.

The transpilation step is usually done by Babel.

## The problem

Bundlers and transpilers usually assume they are running in a node environment with access to a filesystem.

The people at codesanbox (shout out to @CompuIves) solve this with sandpack by implementing the same interface as webpack and doing a lot of smart stuff.

https://medium.com/hackernoon/how-i-created-a-parallel-offline-extensible-browser-based-bundler-886db508cc31

## The approach here

```
This repo is an experiment so this readme may not be updated. Information is as of commit 1afcf1a (17/06/2020). 
```

We user rollup.js for bundling. It has the `@rollup/plugin-virtual` plugin that lets us load a module from memory (in our case, all modules, including the application entry point). This way, all strings representing different files can be bundled into a single file (an output string).

The babel plugin for rollup uses the standard babel internally (see problem above). So the generated bundle is fed through @babel/standalone to be transpiled to plain old ES5.


## Running

- Clone repo
- npm install
- npm start
