import { IUser } from '../interfaces/User';
import { User } from '../entities/User';

const getUser = async() => {
    console.log("Service Get User");
}

const getUsers = async() => {
    console.log("Service Get Users");
    return {}
}

const postUser = async(form: IUser) => {
    const user = new User();
    user.firstName = form.firstName;
    user.lastName = form.lastName;

    const responsePost = await user.save();
    return responsePost;
}

const putUser = async() => {
    console.log("Service Put User");
}

const deleteUser = async() => {
    console.log("Service Delete User");
}

export default { getUsers, getUser, postUser, putUser, deleteUser }