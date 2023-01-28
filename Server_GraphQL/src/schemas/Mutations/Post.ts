import { GraphQLBoolean, GraphQLString, GraphQLID, GraphQLInputObjectType } from 'graphql';
import { Posts } from '../../entities/Post';
import { TPost } from '../TypeDefs/Post';
import { TMessage } from '../TypeDefs/Message';

export const CREATE_POST = {
    type: TPost,
    args: {
        title: { type: GraphQLString },
        body: { type: GraphQLString },
    },
    async resolve(_: any, args: any){
        const { title, body }= args;


        const result = await Posts.insert({
            title, body
        })

        return {...args, id: result.identifiers[0].id, title}
    }
}

export const DELETE_POST = {
    type: GraphQLBoolean,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(_:any, { id }: any){
        const result = await Posts.delete(id);
        if( result.affected === 1 ) return true;
        return false;
    }
}

export const UPDATE_POST = {
    type: TMessage,
    args: {
        id: { type: GraphQLID },
        input: { 
            type: new GraphQLInputObjectType({
                name: 'InputPost',
                fields: {
                    title: { type: GraphQLString },
                    body: { type: GraphQLString },
                }
            })
         }
    },
    async resolve(_:any, { id, input }: any){
        const postFound = await Posts.findOneBy({ id });
        if(!postFound) return {
            ok: false,
            msg: "POST_NOT_FOUND"
        }

        const result = await Posts.update({ id }, { title: input.title, body: input.body })

        if( result.affected === 1 ) return {
            ok: true,
            msg: "TRUE_POST_UPDATE"
        };

        return {
            ok: false,
            msg: "ERROR_UPDATE_POST"
        };
    }
}