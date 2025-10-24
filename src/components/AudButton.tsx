import React, { useState, useEffect } from "react"
import Button from '@mui/material/Button'
import { Parameter } from '../devices/Parameter'

interface ButtonInfo {
  label: string;
  parameter: Parameter
}

export const AudButton: React.FC<ButtonInfo> = ({ label, parameter }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const listener = () => { setValue(parameter.value); };
    const unsub = parameter.on("update", listener);
    return () => { unsub.unsubscribe(); }
  });

  return <Button variant="contained" color={value == 0 ? "primary" : "secondary"}
    onClick={() => {
      parameter.update(parameter.value == 0 ? 1 : 0);
    }}>{label}</Button>
}