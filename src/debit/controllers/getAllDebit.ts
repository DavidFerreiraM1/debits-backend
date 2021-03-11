import { Request, Response } from 'express';
import { IController } from '../../shared/interfaces/controller.interface';
import { dataResponse } from '../../shared/utils/data-response';
import { IDebit } from '../interfaces/debit.interface';
import getAllRepository from '../repositories/getAllRepository';

class GetAllDebits implements IController {
  async run(req: Request, res: Response): Promise<Response> {
    try {
     const result = await getAllRepository.run();
      return res.status(200).send(dataResponse<IDebit[]>(result, null));

    } catch (err) {
      return res.status(500).send(err);
    }
  }
}

export default new GetAllDebits();
