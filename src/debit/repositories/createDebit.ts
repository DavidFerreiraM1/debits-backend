import { Debit } from '../../database/models';
import { IDebit } from '../interfaces/debit.interface';

class CreateDebitRepository {
  async run(data: IDebit): Promise<IDebit> {
    try {
      const newDebit = await Debit.create(data);
      return newDebit;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new CreateDebitRepository();
