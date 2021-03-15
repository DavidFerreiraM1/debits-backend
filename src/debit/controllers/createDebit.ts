import { Request, Response } from 'express';
import { IController } from '../../shared/interfaces/controller.interface';
import { dataResponse } from '../../shared/utils/data-response';
import { IDebit } from '../interfaces/debit.interface';
import { DebitValidation } from '../validations/debit';

import  createDebitRepository from '../repositories/createDebit';

class CreateDebit implements IController {
  async run(req: Request, res: Response): Promise<Response> {
    try {
      const body: IDebit = req.body;
      const { isValid, errors } = new DebitValidation(body);

      if (!isValid) {
        return res.status(400).send(dataResponse<null>(null, errors));
      }

      const newDebit = await createDebitRepository.run(body);
      return res.status(200).send(dataResponse<IDebit>(newDebit, null));

    } catch (err) {
      return res.status(500).send(err);
    }
  }
}

export default new CreateDebit();
