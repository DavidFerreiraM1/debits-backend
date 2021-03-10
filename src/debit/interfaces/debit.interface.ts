import { IEntity } from "../../shared/interfaces/entity.interface";

export interface IDebit extends IEntity {
  userId: number;
  reason: string;
  debitDate: string;
  debitValue: number;
}
