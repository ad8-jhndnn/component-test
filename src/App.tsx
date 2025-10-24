import './App.css'
import { ChannelStrip } from './components/ChannelStrip'
import Stack from '@mui/material/Stack'
import { DeviceCollection, Device } from './devices/Device'
import { Parameter } from './devices/Parameter'


function update(g: Parameter, lvl: Parameter, mute: Parameter) {
  if (mute.value == 1) {
    lvl.update(0);
  } else {
    lvl.update(Math.random() * g.value);
  }
}

function updateDevice(dvc: Device) {
  update(dvc.parameters.LEFT, dvc.parameters.LEFTLEVEL, dvc.parameters.MUTE);
  update(dvc.parameters.RIGHT, dvc.parameters.RIGHTLEVEL, dvc.parameters.MUTE);
}

const App = () => {
  const dc = new DeviceCollection();
  // debug, lets randomly set some meters
  setInterval(() => {
    Object.values(dc.devices).forEach(updateDevice)
  }, 200)

  return (
    <>
      <Stack direction="row" spacing={1}>
        {Object.values(dc.devices).map(function (dvc: Device) {
          return <ChannelStrip key={dvc.name} device={dvc} />
        })}
      </Stack>
    </>
  )
}

export default App
