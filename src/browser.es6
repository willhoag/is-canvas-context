export default function isContext (ctx) {

  return ctx instanceof CanvasRenderingContext2D ||
    ctx instanceof WebGLRenderingContext
}
