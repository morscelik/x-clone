import express from 'express';
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';

const app = express();



app.get('/', (req, res) => res.send("Hello Server"))


const startServer = async ()=> {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => console.log(`Server running on http://localhost:${ENV.PORT}`));
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

startServer();