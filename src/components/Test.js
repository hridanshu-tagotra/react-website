import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import c1 from '../images/c1.jpeg'
import c2 from '../images/c2.jpeg'
import c3 from '../images/c3.jpeg'
import c4 from '../images/c4.jpeg'

const Test = () => {

    const data = [
        {title:'The Mage', description:'This is the almighty mage',image:c1},
        {title:'The Warrior', description:'This is the powerful warrior',image:c2},
        {title:'The Assassin', description:'This is the stealthy assassin',image:c3},
        {title:'The Archer', description:'This is the dexterious archer',image:c4}
    ]

  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <Grid container spacing={4} sx={{p:'70px',display:'flex', justifyContent:'center', backgroundColor:"#1B1B1B"}}>
             <Grid item xs={12}>
        <Typography
          align="center"
          sx={{
            color: "#F2E6CE",
            fontFamily: "Cinzel",
            fontSize: '50px',
            mb: '20px'
          }}
        >
          Join us Today! We have:
        </Typography>
      </Grid>
        {data.map((data, index) =>(
            <Grid item key={index} md={2} xs={12} sx={{}}>2
                <Card 
                    sx={{
                        p:'20px',
                        transition: 'background-color 0.6s, transform 0.3s',
                        backgroundColor: hoveredIndex === index ? '#008B8B' : '#1B1B1B',
                        color: hoveredIndex === index ? 'white' : '#F2E6CE',
                        transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1.0)',
                        boxShadow: hoveredIndex === index 
                        ? '0 10px 20px rgba(0,0,0,0.4)' 
                        : '0 4px 10px rgba(0,0,0,0.3)',
                      borderRadius: '8px' //
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <CardMedia component="img"
                    image={data.image}
                    alt="logo"
                    sx={{}}>    
                    </CardMedia>
                    <CardContent>
                        <Typography align='center' sx={{color: "#F2E6CE",fontFamily: "Cinzel"}}>
                            {data.title}
                        </Typography>
                        <Typography align='center' sx={{color: "#F2E6CE",fontFamily: "Cinzel", fontSize:'12px'}}>
                            {data.description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        ))}
            </Grid>
  )
}

export default Test
