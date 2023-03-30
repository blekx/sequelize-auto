"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
const sequelize_1 = require("sequelize");
class Device extends sequelize_1.Model {
    static initModel(sequelize) {
        return Device.init({
            Id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                primaryKey: true
            },
            Name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            Type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            Location: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'Device',
            timestamps: true
        });
    }
}
exports.Device = Device;
