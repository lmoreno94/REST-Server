import { GraphQLString, GraphQLInputObjectType } from 'graphql';
import { Users } from '../../entities/User';
import { encrypt } from "../../utils/bcrypt.handler";
import { TMessage } from '../TypeDefs/Message';

export const REGISTER = {
    type: TMessage,
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
            msg: "USER_EXIST"
        }

        const encryptPassword = await encrypt(input.password);

        const result = await Users.insert({
            email: input.email,
            password: encryptPassword
        })

        if(result) return {
            ok: true,
            msg: "REGISTER_USER_OK"
        }

        return {
            ok: false,
            msg: "ERROR_REGISTER_USER"
        }
    }
}