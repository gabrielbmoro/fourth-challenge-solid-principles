import { Request, Response, NextFunction } from "express";
import { AppError } from "./AppError";

class ErrorHandler {
  errorHandling(
    err: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ): Response {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      error: `Internal server error ${err.message}`,
    });
  }
}

export { ErrorHandler };
