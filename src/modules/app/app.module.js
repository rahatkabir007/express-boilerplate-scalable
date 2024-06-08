import express from "express"
import cors from "cors"
import { connectDB } from "../../config/database.js";
import { logger } from "../../utils/logger.js"
import { errorMiddleware } from "../../middlewares/error.middleware.js"
import { authMiddleware } from "../../middlewares/auth.middleware.js"
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { UsersModule } from "../users/users.module.js";

const AppModule = async (app) => {
    // Connect to database
    const db = await connectDB();
    app.locals.db = db;

    // Middlewares
    app.use(cors());
    app.use(express.json());
    app.use(authMiddleware);

    // Logger
    app.use((req, res, next) => {
        logger.info(`${req.method} ${req.url}`);
        next();
    });

    const appService = new AppService();
    const appController = new AppController(appService);

    appController.registerRoutes(app);

    // Initialize other modules
    UsersModule(app);

    // Error handling middleware
    app.use(errorMiddleware);
};

export { AppModule };