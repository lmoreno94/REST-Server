import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
    res.send('Control Get All Users');
}

export const getUsers = (req: Request, res: Response) => {
    res.send('Control Get One User');
}

export const postUser = (req: Request, res: Response) => {
    res.send('Control Post User');
}

export const putUser = (req: Request, res: Response) => {
    res.send('Control Put User');
}

export const deleteUser = (req: Request, res: Response) => {
    res.send('Control Delete User');
}