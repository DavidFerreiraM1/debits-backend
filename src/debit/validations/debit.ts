import { AbstractValidation } from '../../shared/validations/abstract-validation';
import { IDebit } from '../interfaces/debit.interface';

export class DebitValidation extends AbstractValidation<IDebit> {
  constructor (public debit: IDebit) {
    super();
    this.validate(debit);
  }

  protected validate(debit: IDebit): void {
    const { userId, reason, debitDate, debitValue } = debit;

    this.isNotEmpty(userId);
    this.isNotEmpty(reason);
    this.isNotEmpty(debitDate);
    this.isNotEmpty(debitValue);

    this.checkAndSetValidation();
  }

  private isNotEmpty(value: string | number): void {
    if (!value) {
      this.setError('Valor não pode ser vazio!');
    }
  }
}
