import { Request, Response } from "express";
import SUser from '../services/User';

const getUser = async(req: Request, res: Response) => {
    await SUser.getUsers();
    res.send('Control Get All Users');
}

const getUsers = async(req: Request, res: Response) => {
    await SUser.getUsers();
    res.send('Control Get One User');
}

const postUser = async(req: Request, res: Response) => {
    await SUser.postUser();
    res.send('Control Post User');
}

const putUser = async(req: Request, res: Response) => {
    await SUser.putUser();
    res.send('Control Put User');
}

const deleteUser = async(req: Request, res: Response) => {
    await SUser.deleteUser();
    res.send('Control Delete User');
}

export default { getUser, getUsers, postUser, putUser, deleteUser }