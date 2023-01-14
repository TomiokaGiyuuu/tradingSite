import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import tradeRoute from "./routes/tradeRoute.js";
import {DB_URI, SERVER_PORT} from "./utils/config.js";
import logger from "./utils/logger.js";
import {logging, writeDateLogging} from "./middlewares/loggingMiddleware.js";
import ObjectModel from "./models/objectModel.js";
import data from "./data.js";


const app = express();

const corsOptions = {
    origin: '*',
    credentials: true,            // access-control-allow-credentials: true
    optionSuccessStatus: 200,
}

app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors(corsOptions));

app.use(writeDateLogging);
app.use("/api", tradeRoute);
app.use(logging);

app.listen(SERVER_PORT, async () => {
    await mongoose.connect(DB_URI, {
    }, async (error) => {
        if (error)
            logger.error(`MongoDB connection error: ${error}`);
        else
            logger.info(`Connected to MongoDB`);
    });
    //
    // await ObjectModel.deleteMany({})
    // for (const item of data) {
    //     await ObjectModel.create(item);
    // }

    logger.info(`Server is running on port ${SERVER_PORT}`);
});
