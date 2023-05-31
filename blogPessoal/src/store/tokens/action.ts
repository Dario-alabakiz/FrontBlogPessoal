export type Action = {type: "ADD_TOKEN"|"ADD_ID"; payload: string};

//pega o token do usuaria na hora do login 
export const addToken = (token: string): Action =>({
    type: "ADD_TOKEN",
    payload: token,
});

//pega o id do usuaria na hora do login 
export const addId = (id: string): Action =>({
    type: "ADD_ID",
    payload: id
})