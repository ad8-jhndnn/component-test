import './App.css'
import { ChannelStrip } from './components/ChannelStrip'
import Stack from '@mui/material/Stack'
import { DeviceCollection } from './devices/Device'
import { Parameter } from './devices/Parameter'


function update(g: Parameter, lvl: Parameter, mute: Parameter) {
  if (mute.value == 1) {
    lvl.update(0);
  } else {
    lvl.update(Math.random() * g.value);
  }
}

const App = () => {
  const dc = new DeviceCollection();
  const { channel1, channel2 } = dc.devices;

  // debug, lets randomly set some meters
  setInterval(() => {
    update(channel1.parameters.LEFT, channel1.parameters.LEFTLEVEL, channel1.parameters.MUTE);
    update(channel1.parameters.RIGHT, channel1.parameters.RIGHTLEVEL, channel1.parameters.MUTE);
    update(channel2.parameters.LEFT, channel2.parameters.LEFTLEVEL, channel2.parameters.MUTE);
    update(channel2.parameters.RIGHT, channel2.parameters.RIGHTLEVEL, channel2.parameters.MUTE);
  }, 200)

  return (
    <>
      <Stack direction="row" spacing={1}>
        <ChannelStrip device={channel1} /><br />
        <ChannelStrip device={channel2} /><br />
      </Stack>
    </>
  )
}

export default App
