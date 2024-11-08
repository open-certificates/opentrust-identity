import { Resolvers, QueryResolvers, MutationResolvers, Tenant } from "../generated/graphql-types";
import TenantDao from "@/lib/dao/tenant-dao";
import { getTenantDaoImpl } from "@/utils/dao-utils";


const tenantDao: TenantDao = getTenantDaoImpl();


const resolvers: Resolvers = {
    Query: {
        getTenants: (_, __, { authToken }) => {
            return tenantDao.getTenants();
        },
        getClients: (_, __, {authToken }) => {
            return tenantDao.getClients();
        },
        getTenantById: (_: any, { tenantId }, { authToekn }: any ) => {
            return tenantDao.getTenantById(tenantId);
        }
    },
    Mutation: {
        createTenant: async (_: any, { tenantInput }, { authToken }) => {
            console.log('auth token is: ' + authToken);
            let tenant: Tenant = {
                allowedScopeValues: tenantInput.allowedScopeValues,
                claimsSupported: tenantInput.claimsSupported,
                clients: [],
                enabled: true,
                signingKeys: [],
                tenantId: "",
                allowUnlimitedRate: tenantInput.allowUnlimitedRate
            }
            await tenantDao.addTenant(tenant);

            return tenant; 
        }
    }
}

export default resolvers;