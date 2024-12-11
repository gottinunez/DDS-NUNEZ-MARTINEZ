import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return  <Box
  component="footer"
  sx={{
    backgroundColor: "#c20000",
    color: "#fff",
    padding: "16px",
    textAlign: "center",
  }}
>
  <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
    © 2024 NUTINEZ
  </Typography>
</Box>
;
};

export default Footer;
