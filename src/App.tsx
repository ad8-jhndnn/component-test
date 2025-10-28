import './App.css'
import { ChannelStrip } from './components/ChannelStrip'
import Stack from '@mui/material/Stack'
import { DeviceCollection, Device } from './devices/Device'
import { Parameter } from './devices/Parameter'
import { useEffect } from "react"

function update(g: Parameter, lvl: Parameter, mute: Parameter) {
  if (mute.value == 1) {
    lvl.update(0);
  } else {
    // randomly change the meter value
    lvl.update(g.value / 2 + (Math.random() * 10));
  }
}

function updateDevice(dvc: Device) {
  update(dvc.parameters.LEFT, dvc.parameters.LEFTLEVEL, dvc.parameters.MUTE);
  update(dvc.parameters.RIGHT, dvc.parameters.RIGHTLEVEL, dvc.parameters.MUTE);
}


const App = () => {
  function update()
  {
    audioDevices.forEach(updateDevice)
  }

  useEffect(() => {
    // debug, lets set some meters
    const interval = setInterval(() => {
      update();
    }, 100)
    return () => {
      clearInterval(interval);
    }
  });

  // this UI only shows AudioDevices
  const audioDevices = Object.values(new DeviceCollection().devices)
    .filter(dvc => dvc.type === "AudioDevice");

  return (
    <Stack direction="row" spacing={1}>
      { // create a channel strip for each device
        audioDevices.map(function (dvc: Device) {
          return <ChannelStrip key={dvc.name} device={dvc} />
        })}
    </Stack>
  )
}

export default App
