# generator-madoos-node-module

Basic generator of a node module

## It includes

 * Unit test with mocha and chai
 * Cover whit istanbul
 * Standard code style
 * Jenkins integration

## Installation

First, install [Yeoman](http://yeoman.io) and generator-madoos-node-module using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-madoos-node-module
```

Then generate your new project:

```bash
yo madoos-node-module
```

## npm scripts

 * `test:linter:show` Show in console
 * `test:unit:show`
 * `test:cover:show`
 * `test:linter:report`  Generates a file for jenkins
 * `test:unit:report`
 * `test:cover:report`
