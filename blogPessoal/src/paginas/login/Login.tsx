import React, { ChangeEvent, useEffect, useState } from 'react';
import './Login.css';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { UsuarioLogin } from '../../models/UsuarioLogin';
import { login } from '../../service/Service';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/action';

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
    });
  const [respUsuarioLogin, setRespUsuarioLogin] = useState<UsuarioLogin>({
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
        //"setToken" caso precise recolocar
        await login('/usuarios/logar', usuarioLogin, setRespUsuarioLogin); 
        alert('Usuario logado com sucesso');
      } catch (error) {
        alert('Usuário e/ou senha inválidos');
      }
    }
  
    /* caso precise recolocar "
    useEffect(() => {
      if (token !== '') {
        dispatch(addToken(token))
        navigate('/home');
      }
    
    }, [token]);"
*/
 // Efeito que fica de olho no token, e quando chega algo diferente de vazio, navega o usuario pra home
     //Pega o token e o id do json e guarda no redux 
    useEffect(() => {
      if (respUsuarioLogin.token !== '') {
        dispatch(addToken(respUsuarioLogin.token))
        dispatch(addId(respUsuarioLogin.id.toString()))
        navigate('/home');
      }
    
    }, [respUsuarioLogin.token]);

  return (
    <Grid 
      className="container"
      container direction="row" 
      justifyContent="center" 
      alignItems="center" >
      <Grid alignItems="center" item xs={6} >
        <Box paddingX={20} className='card'>
          <form onSubmit={enviar} className="form">
            <Typography
              className="form-title"
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
            
            >Login

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
            <Box
              className="form-input"
              marginTop={2} 
              textAlign="center">
            <Button 
              className='button'
              type="submit" 
              variant="contained" 
              color="primary">

              Logar

            </Button>
          </Box>
          </form>
        
          <Box
            
            display='flex' 
            justifyContent='center' 
            marginTop={2} >
            <Box>
            <Typography variant="body1" align="center">
                Ainda não tem uma conta? <Link to="/cadastroUsuario" style={{textDecoration: 'underline'}}>Cadastre-se</Link>
              </Typography>
            </Box>
          </Box>
          </Box>
         
      </Grid>
    </Grid>
  );
}
export default Login;
