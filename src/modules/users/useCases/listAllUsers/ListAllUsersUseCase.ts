import { AppError } from "../../../../errors/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new AppError("The user doesn't exist", 400);
    }

    if (user.admin === false) {
      throw new AppError("The user should be an admin to do this action", 400);
    }

    const all = this.usersRepository.list();
    return all;
  }
}

export { ListAllUsersUseCase };
