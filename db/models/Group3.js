"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group3 = void 0;
const sequelize_1 = require("sequelize");
class Group3 extends sequelize_1.Model {
    static initModel(sequelize) {
        return Group3.init({
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
            }
        }, {
            sequelize,
            tableName: 'Group3',
            timestamps: true
        });
    }
}
exports.Group3 = Group3;
