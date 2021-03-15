import { Debit } from '../../database/models';
import { IDebit } from '../interfaces/debit.interface';

class GetDebitByIdRepository {
  async run(id: number): Promise<IDebit | null> {
    try {
      const result = await Debit.findOne({ where: { id, active: true } });
      return result;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new GetDebitByIdRepository();
