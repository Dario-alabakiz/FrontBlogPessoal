import React, { ChangeEvent, useEffect, useState } from 'react';
import './Login.css';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { UsuarioLogin } from '../../models/UsuarioLogin';
import { login } from '../../service/Service';
import useLocalStorage from 'react-use-localstorage';

function Login() {

  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
    });

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
      setUsuarioLogin({
        ...usuarioLogin,
        [event.target.name]: event.target.value,
      });
    }

    async function enviar(event: ChangeEvent<HTMLFormElement>) {
      event.preventDefault();
      try {
        await login('/usuarios/logar', usuarioLogin, setToken);
        alert('Usuario logado com sucesso');
      } catch (error) {
        alert('Usuário e/ou senha inválidos');
      }
    }
  
    // Efeito que fica de olho no token, e quando chega algo diferente de vazio, navega o usuario pra home
    useEffect(() => {
      if (token !== '') {
        navigate('/home');
      }
     
    }, [token]);
  

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" >
      <Grid alignItems="center" item xs={6} >
        <Box paddingX={20} >
          <form onSubmit={enviar}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
            >
              Login
            </Typography>
            <TextField value={usuarioLogin.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
              id="usuario"
              label="Nome de usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField value={usuarioLogin.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
              id="senha"
              label="Senha"
              type="password"
              variant="outlined"
              name="senha"
              margin="normal"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
            <Button type="submit" variant="contained" color="primary">
              Logar
            </Button>
          </Box>
          </form>
        
          <Box display='flex' justifyContent='center' marginTop={2} >
            <Box>
            <Typography variant="body1" align="center">
                Ainda não tem uma conta? <Link to="/cadastroUsuario" style={{textDecoration: 'underline'}}>Cadastre-se</Link>
              </Typography>
            </Box>
          </Box>
          </Box>
          <Grid xs={6} className="imagem">
      </Grid>
      </Grid>
    </Grid>
  );
}
export default Login;
