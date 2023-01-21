import { GraphQLString } from 'graphql';
import { Users } from '../../entities/User';
import { TUser } from '../TypeDefs/User';
import bcrypt from 'bcryptjs';

export const CREATE_USER = {
    type: TUser,
    args: {
        name: { type: GraphQLString },
        user: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(_: any, args: any){
        const { name, user, password }= args;

        const encryptPassword = await bcrypt.hash(password, 10);

        const result = await Users.insert({
            name,
            user,
            password: encryptPassword
        })

        return {...args, id: result.identifiers[0].id, password: encryptPassword}
    }
}