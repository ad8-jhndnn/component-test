import { EventEmitter } from './EventEmitter'

export interface IParameterEvents {
  update: (state: number) => void
  error: (error: Error) => void
}

export class Parameter extends EventEmitter {
  value: number = 0;
  update(v: number) {
    this.value = v;
    this.emit("update");
  }
}