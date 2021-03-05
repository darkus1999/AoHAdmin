import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@material-ui/core';

let CargaCircular = (props) =>{
	const [valor, setValor] = useState(props.valor)
	useEffect(() => {
		setValor(props.valor);
	});
	return(
		<Box position="relative" display="inline-flex">
          <CircularProgress color={props.valor < 30 ? "inherit" : props.valor > 70 ? "secondary" : "primary" } variant="determinate" value={valor} size={props.size=== null ? 40 : props.size}/>
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant={props.variant === null ? "caption" : props.variant } component="div" color="textSecondary">
            {`${Math.round(valor)}%`}
            </Typography>
          </Box>
        </Box>
		);
}

export { CargaCircular };