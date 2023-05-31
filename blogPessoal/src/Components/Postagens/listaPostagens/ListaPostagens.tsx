import React, { useEffect, useState } from 'react'
import "./ListaPostagens.css";
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../service/Service';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaPostagens() {

  const[ postagens, setPostagens] = useState<Postagem[]>([])
  const navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );


useEffect(() =>{
if(token == ""){
alert("Você precisa estar logado")
navigate('/login');
}
}, [token])

async function getPostagem(){
await busca("/postagens", setPostagens,{
headers: {
'Authorization': token
}
})
}

useEffect(() => {
  getPostagem()
}, [postagens.length])

  return(
  <>
  {
      postagens.map(postagem =>(
  <Box m={2} >
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>

        Tema
        </Typography>

        <Typography variant="h5" component="h2">
        {postagem.titulo}
        </Typography>
        <Typography variant="body2" component="p">
        {postagem.texto}
        </Typography>
        <Typography variant="body2" component="p">
        {postagem.tema?.descricao}
        </Typography>
        <Typography variant="body2" component="p">
        Postado por: {postagem.usuario?.nome}
        </Typography>

      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="center" mb={1.5} >

          <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none">
            <Box mx={1}>
              <Button variant="contained" className="marginLeft" size='small' color="primary" >
              
                atualizar
            
              </Button>
            </Box>
          </Link>
          <Link to={`/deletarPostagens/${postagem.id}`} className="text-decorator-none">
            <Box mx={1}>
              <Button variant="contained" size='small' color="secondary">
              
                deletar
              
              </Button>
            </Box>
          </Link>
        </Box>
      </CardActions>
    </Card>
  </Box>
      ))
}
</>
);
} 

export default ListaPostagens

