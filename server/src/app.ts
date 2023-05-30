import express, {Application} from 'express'
import cors from 'cors'

const app: Application = express()

// Using cors
app.use(cors())

// Parse Data
app.use(express.json())
app.use(express.urlencoded({extended:true}))

export default app;