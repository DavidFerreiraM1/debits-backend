import { isMatch } from 'date-fns';
import { AbstractValidation } from '../../shared/validations/abstract-validation';
import { IDebit } from '../interfaces/debit.interface';

export class DebitValidation extends AbstractValidation<IDebit> {
  constructor (public debit: IDebit) {
    super();
    this.validate(debit);
  }

  protected validate(debit: IDebit): void {
    const { userId, reason, debitDate, debitValue } = debit;

    this.isNotEmpty(userId, 'UserId é obrigatório!');
    this.isNotEmpty(reason, 'A razão da dívida precisa ser informada!');
    this.dateValidate(debitDate);
    this.isNotEmpty(debitDate, 'A data do débito é obrigatória!');
    this.isNotEmpty(debitValue, 'O valor do débito precisa ser informado!');

    this.checkAndSetValidation();
  }

  private isNotEmpty(value: string | number, msg: string): void {
    if (!value) {
      this.setError(msg);
    }
  }

  private dateValidate(date: string): void {
    if (!isMatch(date, 'yyyy-LL-dd')) {
      this.setError('A data não possui formato correto!');
    }
  }
}
