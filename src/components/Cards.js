import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import log from '../images/log.jpg'

const Cards = () => {
  return (
    <Grid container sx={{ background: '#FFFFED', p: 2 }} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          This is the card.
        </Typography>
      </Grid>
      <Grid container item xs={12} spacing={2} justifyContent="center">
        <Grid item xs={12} md={2}>
          <Card sx={{ height: '300px', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              image={log}
              alt="logo"
              sx={{ height: '50%', objectFit: 'cover' }}
            />
            <CardContent
              sx={{
                height: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography>This is card CardContent</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2}>
          <Card sx={{ height: '300px', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              image={log}
              alt="logo"
              sx={{ height: '50%', objectFit: 'cover' }}
            />
            <CardContent
              sx={{
                height: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography>This is card CardContent</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2}>
          <Card sx={{ height: '300px', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              image={log}
              alt="logo"
              sx={{ height: '50%',}}
            />
            <CardContent
              sx={{
                height: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography>This is card CardContent</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Cards
