import { GraphQLID, GraphQLInputObjectType, GraphQLObjectType, GraphQLString } from 'graphql';

export const TUser = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        user: { type: GraphQLString },
        password: { type: GraphQLString }
    }
});
