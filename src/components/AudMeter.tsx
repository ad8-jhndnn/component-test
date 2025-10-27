import React, { useState, useEffect } from "react"
import { Parameter } from '../devices/Parameter'
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";

const VerticalLinearProgress = styled(LinearProgress)(() => ({
  width: "12px",
  height: "100%",
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: "#F5F6FA",
    borderBottom: "2px solid blue",
    transition: "50ms"
  },
  [`&.${linearProgressClasses.colorSecondary}`]: {
    backgroundColor: "#eb82bf"
  }
}));

export const AudMeter: React.FC<{ parameter: Parameter}> = ({parameter}) => {
  const [value, setValue] = useState(parameter.value);
  useEffect(()=> {
    const listener = ()=> { 
      setValue(parameter.value); 
    }; 
    const unsub  = parameter.on("update", listener);
    return ()=> { unsub.unsubscribe(); }
  });

  return <VerticalLinearProgress
    variant="determinate"
    
    value={value}
    sx={{
      [`& .${linearProgressClasses.bar}`]: {
        transform: `translateY(${-value}%)!important`
      }
    }}>
    </VerticalLinearProgress>
}