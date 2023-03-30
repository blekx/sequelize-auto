import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DeviceAttributes {
  Id?: number;
  Name: string;
  Type?: string;
  Location?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type DevicePk = "Id";
export type DeviceId = Device[DevicePk];
export type DeviceOptionalAttributes = "Id" | "Type" | "Location" | "createdAt" | "updatedAt";
export type DeviceCreationAttributes = Optional<DeviceAttributes, DeviceOptionalAttributes>;

export class Device extends Model<DeviceAttributes, DeviceCreationAttributes> implements DeviceAttributes {
  Id?: number;
  Name!: string;
  Type?: string;
  Location?: string;
  createdAt!: Date;
  updatedAt!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Device {
    return Device.init({
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
    },
    Location: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Device',
    timestamps: true
  });
  }
}
