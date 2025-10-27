import React, { useState, useEffect } from "react"
import { Parameter } from '../devices/Parameter'
import Slider from '@mui/material/Slider'

export const AudSlider: React.FC<{ parameter: Parameter}> = ({parameter}) => {
  const [value, setValue] = useState(parameter.value);

  useEffect(()=> {
    const listener = ()=> { setValue(parameter.value); };
    const unsub  = parameter.on("update", listener);
    return ()=> { unsub.unsubscribe(); }
  });
  return <Slider
    className="audSlider"
    orientation="vertical"
    value={value}
    onChange={(_ev: Event, value: number, _activeThumb: number) => {
      parameter.update(value);
    }}></Slider>
}