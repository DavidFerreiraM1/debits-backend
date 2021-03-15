import { Request, Response } from 'express';
import { IController } from "../../shared/interfaces/controller.interface";
import { dataResponse } from '../../shared/utils/data-response';
import removeDebits from '../repositories/removeDebits';

class RemoveDebit implements IController {
  async run(req: Request, res: Response): Promise<Response> {
    try {
      const { params } = req;
      const id = params.id;
      await removeDebits.run(parseInt(id));
      return res.status(200).send(dataResponse<string>('ok', null));
    }
    catch (err) {
      return res.status(500).send(err);
    }
  }
}

export default new RemoveDebit();
