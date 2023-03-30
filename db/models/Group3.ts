import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface Group3Attributes {
  Id?: number;
  Name: string;
  Type?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type Group3Pk = "Id";
export type Group3Id = Group3[Group3Pk];
export type Group3OptionalAttributes = "Id" | "Type" | "createdAt" | "updatedAt";
export type Group3CreationAttributes = Optional<Group3Attributes, Group3OptionalAttributes>;

export class Group3 extends Model<Group3Attributes, Group3CreationAttributes> implements Group3Attributes {
  Id?: number;
  Name!: string;
  Type?: string;
  createdAt!: Date;
  updatedAt!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Group3 {
    return Group3.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Group3',
    timestamps: true
  });
  }
}
