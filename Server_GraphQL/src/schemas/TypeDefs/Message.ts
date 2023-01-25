import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql';

export const TMessage = new GraphQLObjectType({
    name: 'Message',
    fields: {
        ok: { type: GraphQLBoolean },
        msg: { type: GraphQLString }
    }
})

export const T_JWT_Message = new GraphQLObjectType({
    name: 'JWT_Message',
    fields: {
        ok: { type: GraphQLBoolean },
        msg: { type: GraphQLString },
        token: { type: GraphQLString }
    }
})