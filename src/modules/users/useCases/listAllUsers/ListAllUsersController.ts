import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    
    try{
      if (typeof user_id === "string") {
        const users = this.listAllUsersUseCase.execute({ user_id });
        
        return response.status(200).json(users);
      }

      return response.status(500).json({error: `user_id expected a string type`});

    }catch(error){
    
    return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
