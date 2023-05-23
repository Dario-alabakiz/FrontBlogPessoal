import axios from "axios"; 

export const api = axios.create({
baseURL: "https://blogpessoal-t7fk.onrender.com"
})
export const login = async (url: any, dados:any, setDados: any) =>{
const resposta = await api.post(url, dados)
setDados(resposta)
}

export const cadastrarUsuario = async (url: string, dados: object, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
  }

  export const busca = async (url: any, setDados:any ,header: any) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
  }