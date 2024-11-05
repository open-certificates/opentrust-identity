import { Resolvers, QueryResolvers, MutationResolvers } from "../generated/graphql-types";


const resolvers: Resolvers = {
    Query: {
        getTenants: (_, __, { authToken }) => {
            return [];
        },
        getClients: (_, __, {authToken }) => {
            return [];
        },
        getTenantById: (_: any, {  }: any, {  }: any ) => {
            return {
                allowedScopeValues: ["scope.update"],
                claimsSupported: ["email"],
                clients: [],
                enabled: true,
                signingKeys: [],
                allowUnlimitedRate: true,
                rateLimits: [],
                userAccounts: []
            }
        }
    },
    Mutation: {
        createTenant: () => {
            return {
                allowedScopeValues: ["scope.update"],
                claimsSupported: ["email"],
                clients: [],
                enabled: true,
                signingKeys: [],
                allowUnlimitedRate: true,
                rateLimits: [],
                userAccounts: []
            }
        }
    }
}

export default resolvers;