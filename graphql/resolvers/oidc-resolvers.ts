import { Resolvers, QueryResolvers, MutationResolvers, Tenant, Client } from "../generated/graphql-types";
import TenantDao from "@/lib/dao/tenant-dao";
import { getTenantDaoImpl } from "@/utils/dao-utils";


const tenantDao: TenantDao = getTenantDaoImpl();


const resolvers: Resolvers = {
    Query: {
        getTenants: (_, __, { authToken }) => {
            return tenantDao.getTenants();
        },
        getTenantById: (_: any, { tenantId }, { authToekn }: any ) => {
            return tenantDao.getTenantById(tenantId);
        },
        getClients: (_, { tenantId }, {authToken }) => {
            return tenantDao.getClients(tenantId);
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
                tenantDescription: tenantInput.tenantDescription ?? "",
                delegateAuthentication: tenantInput.delegateAuthentication,
                delegatedOIDCClientDef: tenantInput.delegatedOIDCClientDef,
                emailDomains: tenantInput.emailDomains
            }
            await tenantDao.createTenant(tenant);
            return tenant; 
        },
        updateTenant: async (_: any, { tenantInput }, { authToken }) => {
            let tenant: Tenant = {
                tenantId: tenantInput.tenantId,
                claimsSupported: tenantInput.claimsSupported,
                delegateAuthentication: tenantInput.delegateAuthentication,
                enabled: tenantInput.enabled,
                tenantName: tenantInput.tenantName,
                allowUnlimitedRate: tenantInput.allowUnlimitedRate,
                delegatedOIDCClientDef: tenantInput.delegatedOIDCClientDef,
                emailDomains: tenantInput.emailDomains,
                tenantDescription: tenantInput.tenantDescription
            }
            const updatedTenant: Tenant = await tenantDao.updateTenant(tenant);
            return updatedTenant;
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
                pkceEnabled: clientInput.pkceEnabled ?? true,
                clientType: clientInput.clientType
            }
            await tenantDao.createClient(client);
            return client;
        },
        updateClient: async (_: any, { clientInput }, { authToken }) => {
            let client: Client = {
                clientId: clientInput.clientId,
                clientSecret: "",                
                clientName: clientInput.clientName,
                clientDescription: clientInput.clientDescription,
                tenantId: clientInput.tenantId,
                redirectUris: clientInput.redirectUris,
                enabled: clientInput.enabled,
                oidcEnabled: clientInput.oidcEnabled ?? true,
                pkceEnabled: clientInput.pkceEnabled ?? true,
                clientType: clientInput.clientType
            }
            await tenantDao.updateClient(client);
            return client;
        }
    }
}

export default resolvers;