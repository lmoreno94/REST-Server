import { GraphQLString, GraphQLInputObjectType } from 'graphql';
import { Users } from '../../entities/User';
import { encrypt } from "../../utils/bcrypt.handler";
import { generateToken } from "../../utils/jwt.handler";
import { T_JWT_Message } from '../TypeDefs/Message';


export const REGISTER = {
    type: T_JWT_Message,
    args: {
        input: { 
            type: new GraphQLInputObjectType({
                name: 'InputRegisterUser',
                fields: {
                    email: { type: GraphQLString },
                    password: { type: GraphQLString }
                }
            })
         }
    },
    async resolve(_: any, { input }: any){

        const userFound = await Users.findOneBy({ email: input.email });
        if(userFound) return {
            ok: false,
            msg: "USER_EXIST",
        }

        const encryptPassword = await encrypt(input.password);

        const result = await Users.insert({
            email: input.email,
            password: encryptPassword
        })

        const jwt = await generateToken(result.identifiers[0].id);

        if(result) return {
            ok: true,
            msg: "REGISTER_USER_OK",
            token: jwt
        }

        return {
            ok: false,
            msg: "ERROR_REGISTER_USER",
        }
    }
}