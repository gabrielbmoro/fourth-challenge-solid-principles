import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    if (!user) throw new AppError("The user doesn't exist", 404);
    return user;
  }
}

export { ShowUserProfileUseCase };
