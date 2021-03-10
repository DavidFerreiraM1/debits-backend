import { Model } from 'sequelize';

export abstract class AbsctractModel extends Model {
  static initializer(sequelize?: any): void {
    throw new Error('Model config is not implemented');
  }
}
