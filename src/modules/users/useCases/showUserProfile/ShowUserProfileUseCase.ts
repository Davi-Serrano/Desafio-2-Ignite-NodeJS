import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user_idAlreadyExists = this.usersRepository.findById(user => user.id === user_id);
    
    if(!user_idAlreadyExists){
    throw new Error("This user dont exists") ;
  }
    
    return this.usersRepository.list();
}

export { ShowUserProfileUseCase };
