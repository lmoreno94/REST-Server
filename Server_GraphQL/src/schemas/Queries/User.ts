import { TUser } from '../TypeDefs/User';
import { Users } from '../../entities/User';
import { GraphQLList } from 'graphql';

export const GET_ALL_USERS = {
    type: new GraphQLList(TUser),
    async resolve(){
        const result = await Users.find();
        return result;
    }
}