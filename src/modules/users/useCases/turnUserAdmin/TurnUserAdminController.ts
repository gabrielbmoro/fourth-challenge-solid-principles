import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const userId = request.params.user_id;

    const user = this.turnUserAdminUseCase.execute({
      user_id: userId,
    });
    return response.json(user);
  }
}

export { TurnUserAdminController };
