import React, { useState, useEffect } from "react"
import Button from '@mui/material/Button'
import { Parameter } from '../devices/Parameter'
import VolumeMuteOff from '@mui/icons-material/VolumeOff';

interface ButtonInfo {
  label: string;
  parameter: Parameter
}

export const AudButton: React.FC<ButtonInfo> = ({ parameter }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const listener = () => { setValue(parameter.value); };
    const unsub = parameter.on("update", listener);
    return () => { unsub.unsubscribe(); }
  });
  const isMuted = value != 0;

  return <Button
    startIcon={isMuted ? <VolumeMuteOff/> : <></>}
    variant="contained" color={isMuted ? "secondary" : "primary"}
    onClick={() => {
      parameter.update(parameter.value == 0 ? 1 : 0);
    }}>{isMuted ? "MUTED" : "MUTE"}</Button>
}