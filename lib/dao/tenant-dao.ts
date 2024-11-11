import { Client, Group, Key, LoginGroup, RateLimit, Scope, Tenant } from "@/graphql/generated/graphql-types";


abstract class TenantDao {

    /////////////////   TENANTS   ///////////////////////
    abstract getTenants(): Promise<Array<Tenant>>;
 
    abstract getTenantById(tenantId: string): Promise<Tenant | null>;

    abstract createTenant(tenant: Tenant): Promise<Tenant | null>;

    abstract updateTenant(tenant: Tenant): Promise<Tenant>;

    abstract deleteTenant(tenantId: string): Promise<void>;


    /////////////////   CLIENTS   ///////////////////////
    abstract getClients(): Promise<Array<Client>>;
    
    abstract getClientById(clientId: string): Promise<Client | null>;

    abstract getClientsByTenant(tenantId: string): Promise<Array<Client>>;

    abstract createClient(client: Client): Promise<Client>;

    abstract updateClient(client: Client): Promise<Client>;

    abstract deleteClient(clientId: string): Promise<void>;


    /////////////////   SIGNING KEYS   ///////////////////////
    abstract getSigningKeysByTenant(tenantId: string): Promise<Array<Key>>;

    abstract getSigningKeyById(keyId: string): Promise<Key>;

    abstract createSigningKey(key: Key): Promise<Key>;

    abstract deleteSigningKey(keyId: String): Promise<Key>;


    /////////////////   RATE LIMITS   ///////////////////////
    abstract getRateLimitsByTenant(tenantId: string): Promise<Array<RateLimit>>;

    abstract createRateLimit(rateLimit: RateLimit): Promise<RateLimit>;

    abstract getRateLimitById(rateLimitId: string): Promise<RateLimit>;

    abstract updateRateLimit(rateLimit: RateLimit): Promise<RateLimit>;

    abstract deleteRateLimit(rateLimitId: string): Promise<RateLimit>;


    /////////////////   SCOPE   ///////////////////////
    abstract getScopeForTenant(tenantId: string): Promise<Array<Scope>>;

    abstract getScopeById(scopeId: string): Promise<Scope>;

    abstract createScope(scope: Scope): Promise<Scope>;

    abstract updateScope(scope: Scope): Promise<Scope>;

    abstract deleteScope(scopeId: string): Promise<Scope>;


    /////////////////   LOGIN GROUPS   ///////////////////////
    abstract getLoginGroupsForTenant(tenantId: string): Promise<Array<LoginGroup>>;

    abstract getLoginGroupById(loginGroupId: string): Promise<LoginGroup>;

    abstract createLoginGroup(loginGroup: LoginGroup): Promise<LoginGroup>;

    abstract updateLoginGroup(loginGroup: LoginGroup): Promise<LoginGroup>;

    abstract deleteLoginGroup(loginGroupId: string): Promise<LoginGroup>;


    /////////////////   GROUPS   ///////////////////////
    abstract getGroupsForTenant(tenantId: string): Promise<Array<Group>>;
    
    abstract getGroupById(groupId: string): Promise<Group>;

    abstract createGroup(group: Group): Promise<Group>;

    abstract updateGroup(group: Group): Promise<Group>;

    abstract deleteGroup(groupId: string): Promise<Group>
   

}

export default TenantDao;