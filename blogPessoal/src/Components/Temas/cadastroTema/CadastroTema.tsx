import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { buscaId, post, put } from "../../../service/Service";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Tema from "../../../models/Tema";

function CadastroTema() {
  const [tema, setTema] = useState<Tema[]>([]);
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useLocalStorage("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedTema(event: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("tema" + JSON.stringify(tema));

    if (id !== undefined) {
      console.log(tema)
      put(`/temas`, tema, setTema, {
          headers: {
              'Authorization': token
          }
      })
      alert('Tema atualizado com sucesso');
    }else {
      post(`/temas`, tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      alert("Tema cadastrado com sucesso");
    }
    back();
  }

  function back() {
    navigate("/temas");
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Formulário de cadastro tema
        </Typography>
        <TextField
          value={tema.descricao}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updatedTema(event)
          }
          id="descricao"
          label="descricao"
          variant="outlined"
          name="descricao"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroTema;
