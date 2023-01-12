
const getUser = async() => {
    console.log("Service Get User");
}

const getUsers = async() => {
    console.log("Service Get Users");
}

const postUser = async() => {
    console.log("Service Post User");
}

const putUser = async() => {
    console.log("Service Put User");
}

const deleteUser = async() => {
    console.log("Service Delete User");
}

export default { getUsers, getUser, postUser, putUser, deleteUser }