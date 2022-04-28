import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userExists = this.userRepository.findById({user_id});
    
    if(!userExists){
      throw new Error("User not found")
    }
    
    return this.userRepository.turnAdmin({user_id})
}

export { TurnUserAdminUseCase };
