import tape from 'tape'
import createCanvas from 'create-canvas'
import isCanvasContext from '../src/'

let canvas = null

function test (description, fn) {
  tape(description, function (t) {
    t.done = () => {
      t.end()
      canvas = null
    }
    canvas = createCanvas()
    fn(t)
  })
}

test('should return true if is a context', function (t) {
  t.equal(isCanvasContext(canvas.getContext('2d')), true)
  t.done()
})

test('should return false if not a context', function (t) {
  t.equal(isCanvasContext(canvas), false)
  t.equal(isCanvasContext('just a string'), false)
  t.done()
})
