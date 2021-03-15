import { Debit } from '../../database/models';
import { IDebit } from '../interfaces/debit.interface';

class GetAllDebitstRepository {
  async run(): Promise<IDebit[]> {
    try {
      const result = await Debit.findAll({ where: { active: true } });
      return result;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new GetAllDebitstRepository();
