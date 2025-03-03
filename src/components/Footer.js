import { Grid, Typography } from '@mui/material'
import React from 'react'
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Grid container sx={{display:'flex',justifyContent:'space-around', p:2, backgroundColor:'#008B8B'}}>
      <Grid item xs={12} md={9} sx={{display:'flex', alignItems:"center", pl:20}}>
        <Typography varient='h1' sx={{color: "#F2E6CE",fontFamily: "cinzel", fontSize:'20px'}}>
        This is my footer
        </Typography>
      </Grid>
      <Grid item xs={12} md={3} sx={{display:'flex', gap:1}}>
      <Typography varient='h1' sx={{color: "#F2E6CE",fontFamily: "cinzel", fontSize:'20px'}}>
        Follow us
      </Typography>
      <WhatsAppIcon
                            sx={{
                                borderRadius: "25px",
                                height: "30px",
                                width: "30px",
                                color: "#FFF",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                window.location.href =
                                    "https://api.whatsapp.com/send?phone=7760001516";
                            }}
                        />
                            <FacebookIcon
                            sx={{
                                borderRadius: "25px",
                                height: "30px",
                                width: "30px",
                                color: "#FFF",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                window.location.href = "https://www.facebook.com/";
                            }}
                        />
                        <InstagramIcon
                            sx={{
                                borderRadius: "25px",
                                height: "30px",
                                width: "30px",
                                color: "#FFF",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                window.location.href =
                                    " https://www.instagram.com/getmycollege_/";
                            }}
                        />
                        <TwitterIcon
                            sx={{
                                borderRadius: "25px",
                                height: "30px",
                                width: "30px",
                                color: "#FFF",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                window.location.href = "https://twitter.com/";
                            }}
                        />
                        <YouTubeIcon
                            sx={{
                                borderRadius: "25px",
                                height: "30px",
                                width: "30px",
                                color: "#FFF",
                                cursor: "pointer",
                            }}
                        />

      </Grid>
    </Grid>
  )
}

export default Footer
