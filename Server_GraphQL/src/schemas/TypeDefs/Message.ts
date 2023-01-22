import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql';

export const TMessage = new GraphQLObjectType({
    name: 'Message',
    fields: {
        ok: { type: GraphQLBoolean },
        msg: { type: GraphQLString }
    }
})