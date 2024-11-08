import { GraphQLResolveInfo } from 'graphql';
import { OIDCContext } from '../graphql-context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Client = {
  __typename?: 'Client';
  clientId: Scalars['String']['output'];
  clientSecret: Scalars['String']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  loginGroupIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  oidcEnabled?: Maybe<Scalars['Boolean']['output']>;
  redirectUris?: Maybe<Array<Scalars['String']['output']>>;
  scope: Array<Scalars['String']['output']>;
  tenantId: Scalars['String']['output'];
};

export type Group = {
  __typename?: 'Group';
  groupId: Scalars['String']['output'];
  groupName: Scalars['String']['output'];
};

export type Key = {
  __typename?: 'Key';
  e: Scalars['String']['output'];
  exp: Scalars['String']['output'];
  keyId: Scalars['String']['output'];
  keyType: Scalars['String']['output'];
  n: Scalars['String']['output'];
  use: Scalars['String']['output'];
  x5c: Array<Scalars['String']['output']>;
};

export type LoginGroup = {
  __typename?: 'LoginGroup';
  loginGroupDescription?: Maybe<Scalars['String']['output']>;
  loginGroupId: Scalars['String']['output'];
  loginGroupName: Scalars['String']['output'];
};

export type LoginGroupUserRel = {
  __typename?: 'LoginGroupUserRel';
  loginGroupId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTenant?: Maybe<Tenant>;
};


export type MutationCreateTenantArgs = {
  tenantInput: TenantInput;
};

export type Query = {
  __typename?: 'Query';
  getClientById: Client;
  getClients: Array<Client>;
  getGroups: Array<Group>;
  getLoginGroupById: LoginGroup;
  getLoginGroups: Array<LoginGroup>;
  getRateLimits: Array<RateLimit>;
  getTenantById?: Maybe<Tenant>;
  getTenants: Array<Tenant>;
  getUserById: User;
  getUserGroups: Array<Group>;
  getUsers: Array<User>;
};


export type QueryGetClientByIdArgs = {
  clientId: Scalars['String']['input'];
};


export type QueryGetClientsArgs = {
  tenantId: Scalars['String']['input'];
};


export type QueryGetLoginGroupByIdArgs = {
  loginGroupId: Scalars['String']['input'];
};


export type QueryGetRateLimitsArgs = {
  tenantId: Scalars['String']['input'];
};


export type QueryGetTenantByIdArgs = {
  tenantId: Scalars['String']['input'];
};


export type QueryGetUserByIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetUserGroupsArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetUsersArgs = {
  tenantId: Scalars['String']['input'];
};

export type RateLimit = {
  __typename?: 'RateLimit';
  allowUnlimitedRate?: Maybe<Scalars['Boolean']['output']>;
  rateLimit?: Maybe<Scalars['Int']['output']>;
  rateLimitDescription?: Maybe<Scalars['String']['output']>;
  rateLimitDomain: Scalars['String']['output'];
  rateLimitId: Scalars['String']['output'];
  rateLimitPeriodMinutes?: Maybe<Scalars['Int']['output']>;
  tenantId: Scalars['String']['output'];
};

export type Tenant = {
  __typename?: 'Tenant';
  allowUnlimitedRate?: Maybe<Scalars['Boolean']['output']>;
  allowedScopeValues: Array<Scalars['String']['output']>;
  claimsSupported: Array<Scalars['String']['output']>;
  clients: Array<Client>;
  enabled: Scalars['Boolean']['output'];
  rateLimits?: Maybe<Array<Maybe<RateLimit>>>;
  signingKeys: Array<Key>;
  tenantId: Scalars['String']['output'];
  userAccounts?: Maybe<Array<Maybe<User>>>;
};

export type TenantInput = {
  allowUnlimitedRate?: InputMaybe<Scalars['Boolean']['input']>;
  allowedScopeValues: Array<Scalars['String']['input']>;
  claimsSupported: Array<Scalars['String']['input']>;
  enabled: Scalars['Boolean']['input'];
  tenantId?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  middleName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  preferredLanguageCode?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type UserCredential = {
  __typename?: 'UserCredential';
  hashedPassword: Scalars['String']['output'];
  salt: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserCredentialHistory = {
  __typename?: 'UserCredentialHistory';
  hashedPassword: Scalars['String']['output'];
  salt: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserGroupRel = {
  __typename?: 'UserGroupRel';
  groupId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Client: ResolverTypeWrapper<Client>;
  Group: ResolverTypeWrapper<Group>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Key: ResolverTypeWrapper<Key>;
  LoginGroup: ResolverTypeWrapper<LoginGroup>;
  LoginGroupUserRel: ResolverTypeWrapper<LoginGroupUserRel>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RateLimit: ResolverTypeWrapper<RateLimit>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Tenant: ResolverTypeWrapper<Tenant>;
  TenantInput: TenantInput;
  User: ResolverTypeWrapper<User>;
  UserCredential: ResolverTypeWrapper<UserCredential>;
  UserCredentialHistory: ResolverTypeWrapper<UserCredentialHistory>;
  UserGroupRel: ResolverTypeWrapper<UserGroupRel>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Client: Client;
  Group: Group;
  Int: Scalars['Int']['output'];
  Key: Key;
  LoginGroup: LoginGroup;
  LoginGroupUserRel: LoginGroupUserRel;
  Mutation: {};
  Query: {};
  RateLimit: RateLimit;
  String: Scalars['String']['output'];
  Tenant: Tenant;
  TenantInput: TenantInput;
  User: User;
  UserCredential: UserCredential;
  UserCredentialHistory: UserCredentialHistory;
  UserGroupRel: UserGroupRel;
}>;

export type ClientResolvers<ContextType = OIDCContext, ParentType extends ResolversParentTypes['Client'] = ResolversParentTypes['Client']> = ResolversObject<{
  clientId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clientSecret?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  loginGroupIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  oidcEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  redirectUris?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  scope?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  tenantId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GroupResolvers<ContextType = OIDCContext, ParentType extends ResolversParentTypes['Group'] = ResolversParentTypes['Group']> = ResolversObject<{
  groupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  groupName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KeyResolvers<ContextType = OIDCContext, ParentType extends ResolversParentTypes['Key'] = ResolversParentTypes['Key']> = ResolversObject<{
  e?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  keyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  keyType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  n?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  use?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  x5c?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoginGroupResolvers<ContextType = OIDCContext, ParentType extends ResolversParentTypes['LoginGroup'] = ResolversParentTypes['LoginGroup']> = ResolversObject<{
  loginGroupDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  loginGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  loginGroupName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoginGroupUserRelResolvers<ContextType = OIDCContext, ParentType extends ResolversParentTypes['LoginGroupUserRel'] = ResolversParentTypes['LoginGroupUserRel']> = ResolversObject<{
  loginGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = OIDCContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createTenant?: Resolver<Maybe<ResolversTypes['Tenant']>, ParentType, ContextType, RequireFields<MutationCreateTenantArgs, 'tenantInput'>>;
}>;

export type QueryResolvers<ContextType = OIDCContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getClientById?: Resolver<ResolversTypes['Client'], ParentType, ContextType, RequireFields<QueryGetClientByIdArgs, 'clientId'>>;
  getClients?: Resolver<Array<ResolversTypes['Client']>, ParentType, ContextType, RequireFields<QueryGetClientsArgs, 'tenantId'>>;
  getGroups?: Resolver<Array<ResolversTypes['Group']>, ParentType, ContextType>;
  getLoginGroupById?: Resolver<ResolversTypes['LoginGroup'], ParentType, ContextType, RequireFields<QueryGetLoginGroupByIdArgs, 'loginGroupId'>>;
  getLoginGroups?: Resolver<Array<ResolversTypes['LoginGroup']>, ParentType, ContextType>;
  getRateLimits?: Resolver<Array<ResolversTypes['RateLimit']>, ParentType, ContextType, RequireFields<QueryGetRateLimitsArgs, 'tenantId'>>;
  getTenantById?: Resolver<Maybe<ResolversTypes['Tenant']>, ParentType, ContextType, RequireFields<QueryGetTenantByIdArgs, 'tenantId'>>;
  getTenants?: Resolver<Array<ResolversTypes['Tenant']>, ParentType, ContextType>;
  getUserById?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'userId'>>;
  getUserGroups?: Resolver<Array<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<QueryGetUserGroupsArgs, 'userId'>>;
  getUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUsersArgs, 'tenantId'>>;
}>;

export type RateLimitResolvers<ContextType = OIDCContext, ParentType extends ResolversParentTypes['RateLimit'] = ResolversParentTypes['RateLimit']> = ResolversObject<{
  allowUnlimitedRate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rateLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rateLimitDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rateLimitDomain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rateLimitId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rateLimitPeriodMinutes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tenantId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TenantResolvers<ContextType = OIDCContext, ParentType extends ResolversParentTypes['Tenant'] = ResolversParentTypes['Tenant']> = ResolversObject<{
  allowUnlimitedRate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  allowedScopeValues?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  claimsSupported?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  clients?: Resolver<Array<ResolversTypes['Client']>, ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  rateLimits?: Resolver<Maybe<Array<Maybe<ResolversTypes['RateLimit']>>>, ParentType, ContextType>;
  signingKeys?: Resolver<Array<ResolversTypes['Key']>, ParentType, ContextType>;
  tenantId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userAccounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = OIDCContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preferredLanguageCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCredentialResolvers<ContextType = OIDCContext, ParentType extends ResolversParentTypes['UserCredential'] = ResolversParentTypes['UserCredential']> = ResolversObject<{
  hashedPassword?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  salt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCredentialHistoryResolvers<ContextType = OIDCContext, ParentType extends ResolversParentTypes['UserCredentialHistory'] = ResolversParentTypes['UserCredentialHistory']> = ResolversObject<{
  hashedPassword?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  salt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserGroupRelResolvers<ContextType = OIDCContext, ParentType extends ResolversParentTypes['UserGroupRel'] = ResolversParentTypes['UserGroupRel']> = ResolversObject<{
  groupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = OIDCContext> = ResolversObject<{
  Client?: ClientResolvers<ContextType>;
  Group?: GroupResolvers<ContextType>;
  Key?: KeyResolvers<ContextType>;
  LoginGroup?: LoginGroupResolvers<ContextType>;
  LoginGroupUserRel?: LoginGroupUserRelResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RateLimit?: RateLimitResolvers<ContextType>;
  Tenant?: TenantResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserCredential?: UserCredentialResolvers<ContextType>;
  UserCredentialHistory?: UserCredentialHistoryResolvers<ContextType>;
  UserGroupRel?: UserGroupRelResolvers<ContextType>;
}>;



import gql from 'graphql-tag';
export const typeDefs = gql(`schema{query:Query mutation:Mutation}type Client{clientId:String!clientSecret:String!enabled:Boolean loginGroupIds:[String]oidcEnabled:Boolean redirectUris:[String!]scope:[String!]!tenantId:String!}type Group{groupId:String!groupName:String!}type Key{e:String!exp:String!keyId:String!keyType:String!n:String!use:String!x5c:[String!]!}type LoginGroup{loginGroupDescription:String loginGroupId:String!loginGroupName:String!}type LoginGroupUserRel{loginGroupId:String!userId:String!}type Mutation{createTenant(tenantInput:TenantInput!):Tenant}type Query{getClientById(clientId:String!):Client!getClients(tenantId:String!):[Client!]!getGroups:[Group!]!getLoginGroupById(loginGroupId:String!):LoginGroup!getLoginGroups:[LoginGroup!]!getRateLimits(tenantId:String!):[RateLimit!]!getTenantById(tenantId:String!):Tenant getTenants:[Tenant!]!getUserById(userId:String!):User!getUserGroups(userId:String!):[Group!]!getUsers(tenantId:String!):[User!]!}type RateLimit{allowUnlimitedRate:Boolean rateLimit:Int rateLimitDescription:String rateLimitDomain:String!rateLimitId:String!rateLimitPeriodMinutes:Int tenantId:String!}type Tenant{allowUnlimitedRate:Boolean allowedScopeValues:[String!]!claimsSupported:[String!]!clients:[Client!]!enabled:Boolean!rateLimits:[RateLimit]signingKeys:[Key!]!tenantId:String!userAccounts:[User]}input TenantInput{allowUnlimitedRate:Boolean allowedScopeValues:[String!]!claimsSupported:[String!]!enabled:Boolean!tenantId:String}type User{address:String countryCode:String createdDate:String email:String!firstName:String!lastName:String!middleName:String phoneNumber:String preferredLanguageCode:String updatedDate:String userId:String!}type UserCredential{hashedPassword:String!salt:String!userId:String!}type UserCredentialHistory{hashedPassword:String!salt:String!userId:String!}type UserGroupRel{groupId:String!userId:String!}`);