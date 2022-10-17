import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

// server code is contained here in this file and then imported to the index.ts file


//import router:
import userRoutes from './routes/user.routes'

const app = express()

//'dev' is a property of the module morgan
app.use(morgan('dev'))
// el cors modulo lo puedo usar si quiero comunicar con otros servidores
app.use(cors())  

//this line code permits the application to recognise material sent to us in json format
app.use(express.json())

app.use(userRoutes)

export default app;