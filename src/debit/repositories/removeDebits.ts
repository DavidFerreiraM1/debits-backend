import { Debit } from '../../database/models';
import { IDebit } from '../interfaces/debit.interface';

class RemoveDebitstRepository {
  async run(id: number): Promise<void> {
    try {
      await Debit.update({ active: false }, { where: { id } });
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new RemoveDebitstRepository();
