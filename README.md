# is-canvas-context

sanity check to get the context if input happens to be the canvas; errors if it can't return a context

[![Build Status](https://travis-ci.org/willhoag/is-canvas-context.svg)](https://travis-ci.org/willhoag/is-canvas-context)
[![npm version](https://badge.fury.io/js/is-canvas-context.svg)](http://badge.fury.io/js/is-canvas-context)

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install is-canvas-context --save
```

## Usage

```js
import isCanvasContext from './'

let canvas = document.createElement('canvas')

isCanvasContext(canvas) // false
isCanvasContext(canvas.getContext('2d')) // true
isCanvasContext('not a context or canvas') // false
```

## API

`isCanvasContext(ctx:any):boolean`

## License

ISC
