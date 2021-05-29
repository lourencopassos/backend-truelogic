import dotenv from 'dotenv'
import { AddressInfo } from 'net'
import express from 'express'
import cors from 'cors'
import { router } from './routes'

dotenv.config()
const app = express()
app.use(cors({ origin: true }))

app.use(express.json())

app.use('/v1/albums', router)

export const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server running at http://localhost:${address.port}`)
  } else {
    console.error('Critical failure running the server.')
  }
})
