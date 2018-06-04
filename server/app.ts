import * as express from 'express'
import * as next from 'next'
import * as dotenv from 'dotenv'

const port = parseInt(process.env.PORT || '4010', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

/** 환경변수 설정 */
dotenv.load({ path: 'server/config/.env' })

app.prepare()
    .then(() => {
        const server = express()

        server.get('/:username', (req, res) => {
            const {surl} = req.params
            const params = { surl }

            return app.render(req, res, '/user', params)
        })

        server.get('*', (req, res) => handle(req, res))

        server.listen(port, (err: any) => {

            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })
