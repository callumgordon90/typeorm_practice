import "reflect-metadata"
import app from "./app";
// AppDataSource has an asynchronous method which i must call using an async await
import {AppDataSource} from './db'
//SO: this is the function that will launch the entire project:
 async function main() {

    try {
        await AppDataSource.initialize()
        console.log('Database connected')
        app.listen(3000)
        console.log('Server listening on port 3000')
    } catch (error) {
        console.error(error)
    }
 }
                                                 
main()


