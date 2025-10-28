import React, { useState, useEffect, type ReactNode } from "react"
import Button from '@mui/material/Button'
import { Parameter } from '../devices/Parameter'

type Colors = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'; 

interface ButtonState {
  label?: string;
  icon?: ReactNode;
  color?: Colors;
}

interface ButtonInfo {
  parameter: Parameter;
  offState: ButtonState;
  onState: ButtonState;
}

export const AudButton: React.FC<ButtonInfo> = ({ parameter, onState, offState }) => {
  const [value, setValue] = useState(parameter.value);

  useEffect(() => {
    const listener = () => { setValue(parameter.value); };
    parameter.on("update", listener);
    return ()=> { parameter.removeListener("update", listener); }    
  });
  const isMuted = value != 0;

  return <Button
    variant="contained" 
    startIcon={isMuted ? onState.icon : offState.icon}
    color={isMuted ? onState.color : offState.color}
    onClick={() => {
      parameter.update(parameter.value == 0 ? 1 : 0);
    }}>{isMuted ? onState.label : offState.label }</Button>
}