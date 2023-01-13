import { Request, Response } from "express";
import SUser from '../services/User';
import { handleHttp } from '../utils/error.handler';

const getUser = async(req: Request, res: Response) => {
    try {
        const responseUser = await SUser.getUser();
        res.send(responseUser);
    } catch (error) {
        handleHttp(res, "ERROR_GET_USER", error);
    }
}

const getUsers = async(req: Request, res: Response) => {
    try {
        const responseUser = await SUser.getUsers();
        res.send(responseUser);
    } catch (error) {
        handleHttp(res, "ERROR_GET_USERS", error);
    }
}

const postUser = async({ body }: Request, res: Response) => {
    try {
        const responseUser = await SUser.postUser(body);
        res.send(responseUser);
    } catch (error) {
        handleHttp(res, "ERROR_POST_USER", error);
    }
}

const putUser = async(req: Request, res: Response) => {
    try {
        const responseUser = await SUser.putUser();
        res.send(responseUser);
    } catch (error) {
        handleHttp(res, "ERROR_PUT_USER", error);
    }
}

const deleteUser = async(req: Request, res: Response) => {
    try {
        const responseUser = await SUser.deleteUser();
        res.send(responseUser);
    } catch (error) {
        handleHttp(res, "ERROR_DELETE_USER", error);
    }
}

export default { getUser, getUsers, postUser, putUser, deleteUser }