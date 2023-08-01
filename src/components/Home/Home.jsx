// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export function Home(){
    return(
        <Container sx={{ p: 2 }} maxWidth='sm'>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='text.primary'
          gutterBottom
        >
          Gimnasio Moar
        </Typography>
        <Typography variant='h5' align='center' color='text.secondary' paragraph>
          Consulta toda la información sobre nuestro gimnasio y ¡Únete a Nosotros!
        </Typography>
        <Typography variant='h5' align='center' color='text.secondary' paragraph>
            <img src='../../src/images/Moar.PNG' style={{ borderRadius: '50%', width: '300px' }} />
        </Typography>
      </Container>
    );
}