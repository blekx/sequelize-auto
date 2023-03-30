import type { Sequelize } from "sequelize";
import { Device as _Device } from "./Device";
import type { DeviceAttributes, DeviceCreationAttributes } from "./Device";
import { Group as _Group } from "./Group";
import type { GroupAttributes, GroupCreationAttributes } from "./Group";
import { Group3 as _Group3 } from "./Group3";
import type { Group3Attributes, Group3CreationAttributes } from "./Group3";

export {
  _Device as Device,
  _Group as Group,
  _Group3 as Group3,
};

export type {
  DeviceAttributes,
  DeviceCreationAttributes,
  GroupAttributes,
  GroupCreationAttributes,
  Group3Attributes,
  Group3CreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Device = _Device.initModel(sequelize);
  const Group = _Group.initModel(sequelize);
  const Group3 = _Group3.initModel(sequelize);


  return {
    Device: Device,
    Group: Group,
    Group3: Group3,
  };
}
