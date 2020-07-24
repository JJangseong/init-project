import loaders from './loaders';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
    const PORT = process.env.PORT;

    const app = express();

    await loaders({ expressApp: app });
    app.listen(PORT, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Your server is ready ! and Your server is port ${PORT}`);
    });
}

startServer();