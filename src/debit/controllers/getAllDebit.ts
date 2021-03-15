import { Request, Response } from 'express';
import { IController } from '../../shared/interfaces/controller.interface';
import { dataResponse } from '../../shared/utils/data-response';
import { IDebit } from '../interfaces/debit.interface';
import getAllRepository from '../repositories/getAllRepository';
import getDebitByIdRepository from '../repositories/getDebitByIdRespository';

class GetAllDebits implements IController {
  async run(req: Request, res: Response): Promise<Response> {
    try {
      const id: any = req.query.id;
      if (id) {
        const result = await getDebitByIdRepository.run(parseInt(id));
        return res.status(200).send(dataResponse<IDebit | null>(result, null));
      }
      const result = await getAllRepository.run();
      return res.status(200).send(dataResponse<IDebit[]>(result, null));

    } catch (err) {
      return res.status(500).send(err);
    }
  }
}

export default new GetAllDebits();
