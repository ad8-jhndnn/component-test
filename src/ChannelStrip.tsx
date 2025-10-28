import React from "react"
import { Stack, Box } from '@mui/material'
import { AudSlider, AudButton, AudMeter } from "./components/AudComponents"
import { Device } from './devices/Device'
import VolumeMuteOff from '@mui/icons-material/VolumeOff';

export const ChannelStrip: React.FC<{ device: Device }> = ({ device }) => {
  // pull out named parameters from device
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
        <AudSlider parameter={LEFT}/>
        <AudMeter parameter={LEFTLEVEL} />
        <AudSlider parameter={RIGHT}/>
        <AudMeter parameter={RIGHTLEVEL} />
      </Stack>
      <AudButton parameter={MUTE} 
        onState={{color:'error', label: "MUTED", icon: <VolumeMuteOff/> }}
        offState={{color:'primary', label: "MUTE"}}
      />
    </Stack>
  </Box>
}