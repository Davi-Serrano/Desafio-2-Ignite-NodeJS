import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.body;
    
    try{
    this.listAllUsersUseCase.execute({user_id});
    
    }catch(error){

      return response.json(400).send({ error: error.message });
    }
  }
}

export { ListAllUsersController };
