import { Request, Response } from 'express';
import { IController } from '../../shared/interfaces/controller.interface';
import { dataResponse } from '../../shared/utils/data-response';
import { IDebit } from '../interfaces/debit.interface';
import { DebitValidation } from '../validations/debit';

class CreateDebit implements IController {
  async run(req: Request, res: Response): Promise<Response> {
    try {
      const body: IDebit = req.body;
      const { isValid, errors } = new DebitValidation(body);

      if (!isValid) {
        return res.status(400).send(dataResponse<null>(null, errors));
      }

      return res.status(201);

    } catch (err) {
      return res.status(500).send(err);
    }
  }
}

export default new CreateDebit();
