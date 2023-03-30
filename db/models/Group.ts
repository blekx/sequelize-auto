import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface GroupAttributes {
  Id?: number;
  Name: string;
  Type?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type GroupPk = "Id";
export type GroupId = Group[GroupPk];
export type GroupOptionalAttributes = "Id" | "Type" | "createdAt" | "updatedAt";
export type GroupCreationAttributes = Optional<GroupAttributes, GroupOptionalAttributes>;

export class Group extends Model<GroupAttributes, GroupCreationAttributes> implements GroupAttributes {
  Id?: number;
  Name!: string;
  Type?: string;
  createdAt!: Date;
  updatedAt!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Group {
    return Group.init({
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
    tableName: 'Group',
    timestamps: true
  });
  }
}
