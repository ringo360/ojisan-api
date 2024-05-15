import { Hono } from 'hono'
import { emoji } from './util'
const app = new Hono()

app.get('/', async (c) => {
  return c.text(await emoji())
})

console.log('[Hono] Ready')
export default app
