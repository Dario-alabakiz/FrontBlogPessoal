import React, { useEffect } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Home.css";
import TabPostagens from "../../Components/Postagens/tabPostagens/TabPostagens";
import ModalPostagem from "../../Components/Postagens/modalPostagem/ModalPostagem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function Home() {

  const navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  
  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
        navigate("/login")

    }
}, [token])

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="caixa"
    >
      <Grid alignItems="center" item xs={6}>
        <Box paddingX={20}>
          <Typography
            variant="h3"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            className="titulo"
          
          >Seja bem vindo(a)!</Typography>

          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h5"
            align="center"
            className="titulo"

          >expresse aqui os seus pensamentos e opiniões!</Typography>

        </Box>
        <Box display="flex" justifyContent="center">
          <Box marginRight={1}>
            <ModalPostagem/>
          </Box>
          <Link to='/postagens'>
          <Button
            variant="outlined"
            className="botao"

          >Ver Postagens</Button>

          </Link>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <img
          src="./src/assets/img/blog.jpg"
          alt=""
          width="500px"
          height="520px"
        />
      </Grid>
      <Grid xs={12} className="postagens">
        <TabPostagens/>
      </Grid>
    </Grid>
  );
}

export default Home;