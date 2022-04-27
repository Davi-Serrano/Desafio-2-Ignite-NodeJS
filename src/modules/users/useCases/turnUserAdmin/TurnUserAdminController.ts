import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {};

  handle(request: Request, response: Response): Response {
    const { name, email }  = request.body;

    this.turnUserAdminUseCase.execute({ name, email });

    return response.status(200).send();
  }
}

export { TurnUserAdminController };
