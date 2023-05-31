/*import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TokenState } from '../../store/tokens/tokensReducer'
import Usuario from '../../models/Usuario'
import { buscaId } from '../../service/Service'

function Perfil() {

    const userId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
        )
        const [usuario, setUsuario] = useState<Usuario>({
            id: +userId,
            nome: '',
            usuario: '',
            foto: '',
            senha: '',
            })

            async function getUserById(id: number) {
                await buscaId(`/usuarios/${id}`, setUsuario, {
                headers: {Authorization: token}
                })
                }

                useEffect(() => {
                    getUserById(+userId)
                    }, [])
                    
  return (
    <div>Perfil</div>
  )
}

export default Perfil*/