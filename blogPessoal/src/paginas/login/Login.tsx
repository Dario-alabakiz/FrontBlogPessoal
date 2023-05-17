import React from "react";
import "./Login.css";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" item xs={6}>
        <Box paddingX={20}>
          <form>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
            >
              Login
            </Typography>
            <TextField
              id="usuario"
              label="Nome de usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              id="senha"
              label="Senha"
              type="password"
              variant="outlined"
              name="senha"
              margin="normal"
              fullWidth
            />
          </form>
        </Box>
        <Box marginTop={2} textAlign="center">
          <Link to="/home" className="text-decorator-none">
            <Button type="submit" variant="contained" color="primary">
              Logar
            </Button>
          </Link>
          <Box display='flex' justifyContent='center' marginTop={2}>
            <Box>
              <Typography variant="subtitle1" gutterBottom align="center"> tem uma conta? </Typography>
            </Box>
            <Typography variant="subtitle1" gutterBottom align="center" style={{fontWeight: 'bold'}}>Cadastre-se</Typography>
          </Box>
          <Grid xs={6} style={{
        backgroundImage: 'url(https://br.pinterest.com/pin/753086368955188998/)' ,backgroundRepeat:'no-repeat',
          width: "100vh", backgroundSize: 'cover', backgroundPosition: 'center'
      }}>

      </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
export default Login;
