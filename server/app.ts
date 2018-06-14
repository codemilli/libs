import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as next from 'next'
import * as dotenv from 'dotenv'

/** 환경변수 설정 */
dotenv.load({path: 'server/config/.env'})

import {getConnection} from "./config/db-connect";

const port = parseInt(process.env.PORT || '4010', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
  .then(async () => {
    const server = express()
    await getConnection()

    server.use(bodyParser.json())
    server.use(cookieParser())

    require('./api/api.routes').APIRouter(server)
    server.get('/:username', (req, res, next) => {
      if (req.params.username !== 'hckrmoon') {
        return next()
      }
      return app.render(req, res, '/user-home')
    })

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, (err: any) => {

      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
