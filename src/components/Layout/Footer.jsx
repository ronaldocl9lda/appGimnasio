import { Box, Container, Grid, Typography } from '@mui/material'

export function Footer () {
  return (
    <>
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '4.5rem',
        backgroundColor: 'primary.main',
        paddingTop: '1rem',
        paddingBottom: '1rem'
      }}
    >
      <Container maxWidth='lg'>
        <Grid container direction='column' alignItems='center'>
          <Grid item xs={12}>
            <Typography color='white' variant='subtitle1'>
              Ronaldo Campos Lucas & Vladimir Fenner Zelaya &copy;
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color='textSecondary' variant='body1'>
              {`Grupo 3 - ISW ${new Date().getFullYear()}`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  )
}

