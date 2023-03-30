"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const sequelize_1 = require("sequelize");
class Group extends sequelize_1.Model {
    static initModel(sequelize) {
        return Group.init({
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
            tableName: 'Group',
            timestamps: true
        });
    }
}
exports.Group = Group;
