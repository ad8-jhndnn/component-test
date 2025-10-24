import React from "react"
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { AudSlider } from './AudSlider'
import { AudButton } from './AudButton'
import { AudMeter } from './AudMeter'
import { Device } from '../devices/Device'


export const ChannelStrip: React.FC<{ device: Device }> = ({ device }) => {
  const {LEFT, RIGHT, LEFTLEVEL, RIGHTLEVEL, MUTE} = device.parameters;

  return <Box sx={{
    borderRadius: 1,
    borderWidth: 1,
    border: '1px solid slateblue',
    bgcolor: 'darkgray',
    padding: 1

  }}>
    <Stack spacing={3}>
      <div>{device.name}</div>
      <Stack sx={{ height: 150 }} spacing={1} direction="row">
        <AudSlider parameter={LEFT}></AudSlider>
        <AudMeter parameter={LEFTLEVEL} />
        <AudSlider parameter={RIGHT} ></AudSlider>
        <AudMeter parameter={RIGHTLEVEL} />
      </Stack>
      <AudButton parameter={MUTE} label="mute" />
    </Stack>
  </Box>
}