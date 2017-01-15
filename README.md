# generator-madoos-node-module

Basic generator of a node module

## It includes

 * Unit test with Mocha and Chai
 * Cover whit Istanbul
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

## Run test

 * `npm test`
 * `npm run test:linter:show`
 * `npm run test:unit:show`
 * `npm run test:cover:show`

## Run test and generate report files

 * `npm run test:report`
 * `npm run test:linter:report`
 * `npm run test:unit:report`
 * `npm run test:cover:report`
