const reducer = (state= {}, action) =>{
    switch(action.type) {
        case 'USER_TOKEN' : {
            return action.payload
        }
        case 'CREATE_USER' : {
            return action.payload
        }
        case 'UPDATE_USER' : {
            return action.payload
        }
        default : {
            return `STORE`
        }
    }
}

export default reducer
