import React from "react";
import "./Footer.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if(token !== ''){
    footerComponent = 
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className="textos"
              >
                Siga-nos nas redes sociais{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://github.com/Dario-alabakiz" target="_blank">
                <GitHubIcon className="redes" />
              </a>
              <a href="https://contate.me/dario-alabakiz" target="_blank">
                <WhatsAppIcon className="redes" />
              </a>
              <a
                href="https://www.linkedin.com/in/dario-pereira-alabakiz/"
                target="_blank"
              >
                <LinkedInIcon className="redes" />
              </a>
            </Box>
          </Box>
          <Box className="box2">
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className="textos"
              >
                © 2023 Copyright:
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className="textos"
                  align="center"
                >
                  Dario Alabakiz
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
  }

  return (
    <>
      {footerComponent} 
    </>
  );
}
export default Footer;
