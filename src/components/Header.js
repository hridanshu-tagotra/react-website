import { Box, Button, Grid, Typography} from "@mui/material";
import React from "react";
import logo3 from "../images/logo3.png";
import banner2 from "../images/banner2.jpg";

const Header = () => {
  return (
    <Grid container sx={{ background: `url(${banner2})`,backgroundSize:'cover',backgroundPosition:'top 10px', padding: 2, alignItems:"center"}}>
      <Grid item xs={12} md={3}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src={logo3} alt="Logo" style={{ height: "80px", width: "80px" }} />
          <Typography varient='h1' sx={{color: "#F2E6CE",fontFamily: "Cinzel", fontSize:'30px'}}>Mythos Keep</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={9}>
        <Box sx={{display:"flex", justifyContent:"flex-end", gap:7}}>
            <Button sx={{ backgroundColor: "", color:'#F2E6CE',"&:hover":{backgroundColor:'#1B1B1B', transform: "scale(1.05)"}}}>
              Home
            </Button>
            <Button sx={{ backgroundColor: "",color:'#F2E6CE', "&:hover":{backgroundColor:'#1B1B1B', transform: "scale(1.05)"}, }}>
              About us
            </Button>
            <Button sx={{ backgroundColor: "",color:'#F2E6CE',"&:hover":{backgroundColor:'#1B1B1B', transform: "scale(1.05)"}}}>
              Contact us
            </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
