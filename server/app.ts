import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { mongooseConnection } from './config/mongooseConnection.config'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: 'application/vnd.api+json' }))
app.use(cors())
app.use(morgan('dev'))

app.set('mongoose connection', mongooseConnection)

import index from './routes'
import pokeRoutes from './routes/poke_routes'

app.use(index)
app.use('/api/v1', pokeRoutes)

export default app