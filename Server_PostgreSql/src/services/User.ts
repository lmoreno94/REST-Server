import { IUser } from '../interfaces/User';
import { User } from '../entities/User';

const getUser = async(id: number) => {
    const responseGet = await User.findOneBy({ id });
    return responseGet; 
}

const getUsers = async() => {
    const responseGet = await User.find();
    return responseGet;
}

const postUser = async(form: IUser) => {
    const user = new User();
    user.firstName = form.firstName;
    user.lastName = form.lastName;

    const responsePost = await user.save();
    return responsePost;
}

const putUser = async(id: number, form: IUser) => {
    const responsePut = await User.update({ id }, form);
    return responsePut
}

const deleteUser = async() => {
    console.log("Service Delete User");
}

export default { getUsers, getUser, postUser, putUser, deleteUser }