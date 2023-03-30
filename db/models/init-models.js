"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.Group3 = exports.Group = exports.Device = void 0;
const Device_1 = require("./Device");
Object.defineProperty(exports, "Device", { enumerable: true, get: function () { return Device_1.Device; } });
const Group_1 = require("./Group");
Object.defineProperty(exports, "Group", { enumerable: true, get: function () { return Group_1.Group; } });
const Group3_1 = require("./Group3");
Object.defineProperty(exports, "Group3", { enumerable: true, get: function () { return Group3_1.Group3; } });
function initModels(sequelize) {
    const Device = Device_1.Device.initModel(sequelize);
    const Group = Group_1.Group.initModel(sequelize);
    const Group3 = Group3_1.Group3.initModel(sequelize);
    return {
        Device: Device,
        Group: Group,
        Group3: Group3,
    };
}
exports.initModels = initModels;
