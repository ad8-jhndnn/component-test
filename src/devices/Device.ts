import { Parameter } from './Parameter'

export class Device {
  name: string
  type: string = "AudioDevice";
  parameters: {
    LEFT: Parameter,
    LEFTLEVEL: Parameter,
    RIGHT: Parameter,
    RIGHTLEVEL: Parameter,
    MUTE: Parameter,
  };
  constructor(name:string) {
    this.name = name;
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
    channel3: Device,
  };
  constructor() {
    this.devices = {
      channel1: new Device("channel 1"),
      channel2: new Device("channel 2"),
      channel3: new Device("channel 3")
    }
  }
}