import express from "express";

import { ErrorHandler } from "./errors/error.handling";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

const errorHandler = new ErrorHandler();

app.use(errorHandler.errorHandling);

export { app };
