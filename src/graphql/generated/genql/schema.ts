import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    DateTime: any,
    ID: string,
    String: string,
    Boolean: boolean,
}

export interface Post {
    id: Scalars['ID']
    title: Scalars['String']
    __typename: 'Post'
}

export interface Query {
    getOnePost?: Post
    getPosts?: (Post | undefined)[]
    __typename: 'Query'
}

export interface PostRequest{
    id?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    getOnePost?: [{id: Scalars['String']},PostRequest]
    getPosts?: PostRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Post_possibleTypes = ['Post']
export const isPost = (obj?: { __typename?: any } | null): obj is Post => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPost"')
  return Post_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}


export interface PostPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface PostObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface QueryPromiseChain{
    getOnePost: ((args: {id: Scalars['String']}) => PostPromiseChain & {get: <R extends PostRequest>(request: R, defaultValue?: (FieldsSelection<Post, R> | undefined)) => Promise<(FieldsSelection<Post, R> | undefined)>}),
    getPosts: ({get: <R extends PostRequest>(request: R, defaultValue?: ((FieldsSelection<Post, R> | undefined)[] | undefined)) => Promise<((FieldsSelection<Post, R> | undefined)[] | undefined)>})
}

export interface QueryObservableChain{
    getOnePost: ((args: {id: Scalars['String']}) => PostObservableChain & {get: <R extends PostRequest>(request: R, defaultValue?: (FieldsSelection<Post, R> | undefined)) => Observable<(FieldsSelection<Post, R> | undefined)>}),
    getPosts: ({get: <R extends PostRequest>(request: R, defaultValue?: ((FieldsSelection<Post, R> | undefined)[] | undefined)) => Observable<((FieldsSelection<Post, R> | undefined)[] | undefined)>})
}