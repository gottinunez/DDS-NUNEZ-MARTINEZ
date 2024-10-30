import {
  AppRegistration,
  Login,
  MonetizationOn,
  Web,
} from "@mui/icons-material";
import { Box, Link, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";


const Header = () => (
  <Stack sx={{alignItems:"center", paddingBottom:"1%",paddingTop:"1%"}}>
<Link href="/" underline="none" color="inherit" fontWeight="bold">
  <Typography color={"#ffff"} fontWeight="bold" >NUTINEZ</Typography>
</Link>

</Stack>
);

export default Header;
