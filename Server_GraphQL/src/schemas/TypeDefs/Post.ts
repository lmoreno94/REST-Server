import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';
import { Users } from '../../entities/User';
import { TUser } from './User';

export const TPost = new GraphQLObjectType({
    name: 'PostType',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        author: { 
            type: TUser, 
            resolve(parent){
                return Users.findOneBy({ id: parent.__user__})
            }
        }
    }
});
