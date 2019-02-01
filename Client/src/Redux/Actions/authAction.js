const storeToken = (token) => {
    return {
        type: "USER_TOKEN",
        payload : token
    }
}
const createUser = (user) => {
    return {
        type: "CREATE_USER",
        payload : user
    }
}
const updateUser = (user) => {
    return {
        type: "UPDATE_USER",
        payload : user
    }
}

export {
    storeToken,
    createUser,
    updateUser
}