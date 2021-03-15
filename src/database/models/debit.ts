import { DataTypes } from 'sequelize';
import { AbsctractModel } from './modelAbstract';
import { IDebit } from '../../debit/interfaces/debit.interface';

export class Debit extends AbsctractModel implements IDebit {
  id!: number;
  userId!: number;
  reason!: string;
  debitDate!: string;
  debitValue!: number;
  active!: boolean;

  static initializer(sequelize: any) {
    this.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      reason: {
        type: DataTypes.STRING,
        allowNull: false
      },
      debitDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      debitValue: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }
    },{
      tableName: 'tbl_debit',
      sequelize,
    });
  
    return this;
  }
}