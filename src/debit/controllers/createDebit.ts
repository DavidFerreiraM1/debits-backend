import { Request, Response } from 'express';
import { IController } from '../../shared/interfaces/controller.interface';

class CreateDebit implements IController {
  async run(req: Request, res: Response): Promise<Response> {
    try {
      const { body } = req;
      return res.status(204);
    } catch (err) {
      return res.send('ERR0R');
    }
  }
}

export default new CreateDebit();
