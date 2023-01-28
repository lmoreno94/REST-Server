import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const TPost = new GraphQLObjectType({
    name: 'Post',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
    }
});
