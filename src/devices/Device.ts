import { Parameter } from './Parameter'

export class Device {
  parameters: {
    LEFT: Parameter,
    LEFTLEVEL: Parameter,
    RIGHT: Parameter,
    RIGHTLEVEL: Parameter,
    MUTE: Parameter,
  };
  constructor() {
    this.parameters = {
      LEFT: new Parameter(),
      LEFTLEVEL: new Parameter(),
      RIGHT: new Parameter(),
      RIGHTLEVEL: new Parameter(),
      MUTE: new Parameter(),
    };
  }
}

export class DeviceCollection {
  devices: {
    channel1: Device,
    channel2: Device,
  };
  constructor() {
    this.devices = {
      channel1: new Device(),
      channel2: new Device()
    }
  }
}