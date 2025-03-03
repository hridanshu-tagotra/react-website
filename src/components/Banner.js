import { Grid, Typography} from "@mui/material";
import React from "react";
import banner2 from "../images/banner2.jpg";
const Banner = () => {
  return (
    <Grid
      container
      sx={{
        background: `url(${banner2})`,
        backgroundSize: 'cover',
        backgroundPosition:'center 27%',
        height: "80vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item sx={{}}>
        <Typography
          variant="h1"
          component="h1"
          sx={{ color: "#F2E6CE",fontFamily: "Cinzel",fontSize:'120px', WebkitTextStroke: "2px black" }}
        >
          Enter The Castle Of Myths 
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Banner;
