import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React from 'react';
import { IconButton } from '@mui/material';
import useColorMode from '../../hooks/useColorMode';


const ButtonDarkMode = () => {
  const theme = useTheme();
  const colorMode = useColorMode();


  return (
    <Box
      sx={{
        display: 'flex',
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text.primary',
        borderRadius: 1,
        p: 1,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default ButtonDarkMode;