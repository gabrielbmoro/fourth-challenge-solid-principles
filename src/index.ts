import express from "express";
import swaggerUI from "swagger-ui-express";

import { ErrorHandler } from "./errors/error.handling";
import { usersRoutes } from "./routes/users.routes";
import * as swaggerDocument from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const errorHandler = new ErrorHandler();

app.use(errorHandler.errorHandling);

export { app };
