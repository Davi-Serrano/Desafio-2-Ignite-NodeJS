import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user_IdAlreadyExists = this.usersRepository.findById(user_id);

    if(!user_IdAlreadyExists){
      throw new Error("User dont exists");
    }

    if(user_IdAlreadyExists.admin === false){
      throw new Error("User aren't authencticated");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
