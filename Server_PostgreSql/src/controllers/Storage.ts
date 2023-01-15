import { Response } from "express";
import { RequestExt } from "../interfaces/ResquestExt";
import { IStorage } from "../interfaces/Storage";
import { registerUpload } from "../services/Storage";
import SUser from "../services/User";
import { handleHttp } from "../utils/error.handler";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const responseGetUser = await SUser.getUser(Number(user));
    if( !responseGetUser ){
        return handleHttp(res, "ERROR_ID_USER", 'Not Exist');
    }

    const dataToRegister: IStorage = {
      fileName: `${file?.filename}`,
      user: responseGetUser,
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_FILE");
  }
};

export { getFile };