import isCanvasContext from './'

let canvas = document.createElement('canvas')

isCanvasContext(canvas) // false
isCanvasContext(canvas.getContext('2d')) // true
isCanvasContext('not a context or canvas') // false
