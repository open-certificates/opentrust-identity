import { Resolvers, QueryResolvers, MutationResolvers, Tenant, Client } from "../generated/graphql-types";
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
        },
        getClientById: (_: any, { clientId }, { authToken }: any) => {
            return tenantDao.getClientById(clientId);
        }
    },
    Mutation: {
        createTenant: async (_: any, { tenantInput }, { authToken }) => {
            console.log('auth token is: ' + authToken);
            let tenant: Tenant = {
                claimsSupported: tenantInput.claimsSupported,
                enabled: true,
                tenantId: "",
                allowUnlimitedRate: tenantInput.allowUnlimitedRate,
                tenantName: tenantInput.tenantName,
                tenantDescription: tenantInput.tenantDescription ?? ""
            }
            await tenantDao.createTenant(tenant);
            return tenant; 
        },
        updateTenant: async (_: any, { tenantInput }, { authToken }) => {
            return null;
        },
        createClient: async (_: any, { clientInput }, { authToken }) => {
            let client: Client = {
                clientId: "",
                clientSecret: "",
                clientName: clientInput.clientName,
                clientDescription: clientInput.clientDescription,
                tenantId: clientInput.tenantId,
                redirectUris: clientInput.redirectUris,
                enabled: true,
                oidcEnabled: clientInput.oidcEnabled ?? true,
                pkceEnabled: clientInput.pkceEnabled ?? true
            }
            await tenantDao.createClient(client);
            return client;
        }
    }
}

export default resolvers;