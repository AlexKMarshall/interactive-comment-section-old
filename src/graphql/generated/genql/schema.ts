import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    String: string,
    ID: string,
    DateTime: any,
    Boolean: boolean,
}

export interface Comment {
    comment: Scalars['String']
    createdAt: Scalars['DateTime']
    id: Scalars['ID']
    updatedAt: Scalars['DateTime']
    __typename: 'Comment'
}

export interface Query {
    getComments?: (Comment | undefined)[]
    __typename: 'Query'
}

export interface CommentRequest{
    comment?: boolean | number
    createdAt?: boolean | number
    id?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    getComments?: CommentRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Comment_possibleTypes = ['Comment']
export const isComment = (obj?: { __typename?: any } | null): obj is Comment => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isComment"')
  return Comment_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}


export interface CommentPromiseChain{
    comment: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>})
}

export interface CommentObservableChain{
    comment: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>})
}

export interface QueryPromiseChain{
    getComments: ({get: <R extends CommentRequest>(request: R, defaultValue?: ((FieldsSelection<Comment, R> | undefined)[] | undefined)) => Promise<((FieldsSelection<Comment, R> | undefined)[] | undefined)>})
}

export interface QueryObservableChain{
    getComments: ({get: <R extends CommentRequest>(request: R, defaultValue?: ((FieldsSelection<Comment, R> | undefined)[] | undefined)) => Observable<((FieldsSelection<Comment, R> | undefined)[] | undefined)>})
}