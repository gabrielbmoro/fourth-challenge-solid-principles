import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const userId = request.params.user_id;
    const all = this.listAllUsersUseCase.execute({ user_id: userId });
    return response.json(all);
  }
}

export { ListAllUsersController };
