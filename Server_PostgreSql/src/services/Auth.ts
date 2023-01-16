import { IUser } from "../interfaces/User"
import { User } from "../entities/User"
import { encrypt, verified } from "../utils/bcrypt.handler"
import { IAuth } from '../interfaces/Auth';
import { generareToken } from "../utils/jwt.handler";

const registerNewUser = async({ email, password, firstName }: IUser) => {
    const checkIs = await User.findOneBy({ email })
    if(checkIs) return 'ALREADY_USER'

    const passHash = await encrypt(password)
    const registerNewUser = await User.create({ email, password: passHash, firstName })
    return registerNewUser
}

const logInUser = async({ email, password}:IAuth) => {
    const checkIs = await User.findOneBy({ email })
    if(!checkIs) return 'NOT_FOUND_USER'

    const passwordHash = checkIs.password
    const isCorrect = await verified(password, passwordHash)
    if(!isCorrect) return 'PASSWORD_INCORRECT'

    const token = generareToken(checkIs.email)
    return { token, user: checkIs }
}

export { registerNewUser, logInUser }