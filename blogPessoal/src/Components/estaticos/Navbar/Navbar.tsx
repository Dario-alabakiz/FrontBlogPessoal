import React from "react";
import "./navbar.css";
import { AppBar, Toolbar, Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useDispatch } from "react-redux";
import { addToken } from "../../../store/tokens/action";
import {toast} from 'react-toastify';

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  function goLogout() {
    dispatch(addToken(""));
    toast.info('Usuário deslogado', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
  });
    navigate("/login");
  }

  var navbarComponent;

  if(token !== ''){
    navbarComponent = 
    <AppBar position="static" className="navbar">
    <Toolbar variant="dense">
      <Grid container justifyContent={"space-between"}>
        <Box className="cursor">
          <Typography variant="h5" color="inherit">
            BlogPessoal
          </Typography>
        </Box>

        <Box display="flex" justifyContent="start">
          <Link to="/home" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
          </Link>
          <Link to="/postagens" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
          </Link>
          <Link to="/temas" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
          </Link>
          <Link to="/formularioTema" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
          </Link>

          <Box mx={1} className="cursor" onClick={goLogout}>
            <Typography variant="h6" color="inherit">
              logout
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Toolbar>
  </AppBar>
  }


  return (
    <>
    {navbarComponent}
    </>
  );
}

export default Navbar;
