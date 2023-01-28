import { TPost } from '../TypeDefs/Post';
import { Posts } from '../../entities/Post';
import { GraphQLList, GraphQLID } from 'graphql';

export const GET_ALL_POST = {
    type: new GraphQLList(TPost),
    async resolve(){
        const result = await Posts.find();
        return result;
    }
}

export const GET_ONE_POST = {
    type: TPost,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(_: any, args: any){
        const result = await Posts.findOneBy({ id: args.id });
        return result;
    }
}