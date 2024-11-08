import { Client, Key, RateLimit, Tenant } from "@/graphql/generated/graphql-types";


abstract class TenantDao {

    abstract getTenants(): Promise<Array<Tenant>>;
 
    abstract getTenantById(tenantId: string): Promise<Tenant | null>;

    abstract getClients(): Promise<Array<Client>>;
    
    abstract getClientById(clientId: string): Promise<Client | null>;

    abstract getClientsByTenant(tenantId: string): Promise<Array<Client>>;

    abstract addTenant(tenant: Tenant): Promise<Tenant | null>;

    abstract updateTenant(tenant: Tenant): Promise<Tenant>;

    abstract deleteTenant(tenantId: string): Promise<void>;

    abstract addClient(tenantId: string, client: Client): Promise<Client>;

    abstract updateClient(client: Client): Promise<Client>;

    abstract deleteClient(clientId: string): Promise<void>;

    abstract getSigningKeys(): Promise<Array<Key>>;

    abstract createRateLimitDefinition(rateLimitDef: RateLimit): Promise<RateLimit>;

    abstract updateRateLimitDefinition(rateLimitDef: RateLimit): Promise<RateLimit>;

}

export default TenantDao;