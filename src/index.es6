export default function isContext (ctx) {

  function getFunctionName (obj) {
    return obj.toString().split(' ')[1].replace(/[^a-z0-9_$]/ig, '')
  }

  let name = getFunctionName(ctx.constructor)

  return [
    'CanvasRenderingContext2D',
    'WebGLRenderingContext',
    'CanvasRenderingContext2DConstructor',
    'WebGLRenderingContextConstructor'
  ].indexOf(name) > -1
}
