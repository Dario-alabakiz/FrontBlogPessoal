import Postagem from "./Postagem";

export interface Usuario{ 
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string
    postagem?: Postagem[] 
    //linha adicionada para que o usuário possa ter uma postagem com o seu nome
  }

  export default Usuario