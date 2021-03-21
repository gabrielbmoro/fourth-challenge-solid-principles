import { AppError } from "../../../../errors/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new AppError("The user doesn't exists", 404);
    }
    const userUpdated = this.usersRepository.turnAdmin(user);
    return userUpdated;
  }
}

export { TurnUserAdminUseCase };
