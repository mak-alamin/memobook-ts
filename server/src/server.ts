import mongoose from "mongoose"
import app from "./app"

const port: number = 5000

const connectionUri = 'mongodb://127.0.0.1:27017/memobook'

async function bootstrap() {
    try{
        await mongoose.connect(connectionUri)
        console.log('DB Connection successfull');
        
        app.listen(port, () => {
            console.log(`Server is listening on http://localhost:${port}`);
            
        })

    } catch(err){
        console.log(`Database connection failed`, err);
    }
}

bootstrap()