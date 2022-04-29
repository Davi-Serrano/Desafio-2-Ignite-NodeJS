import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user: User = new User();

     Object.assign(user, {
      name,
      email,
      admin: false,
      created_at: new Date(),
      updated_at: new Date(),
    });
    
    this.users.push(user);

    return user
  }

  findById(id: string): User | undefined {
    const userId = this.users.find( user => user.id === id);

    return userId
    
  } 

  findByEmail(email: string): User | undefined {
    const userEmail = this.users.find( users => users.email === email);

    return userEmail

  }

  turnAdmin(receivedUser: User): User {
    const userIndex = this.users.findIndex( user => user === receivedUser);

    const user = Object.assign(this.users[userIndex],{
        admin: true
    })
    
    return user;
  }

  list(): User[] {
    return this.users
  }
}

export { UsersRepository };
