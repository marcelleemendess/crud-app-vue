import app from "./app"
import {startConnection} from './database'

//connect to my app
startConnection()
app.listen(3000)
console.log('Server is running on port 3000')