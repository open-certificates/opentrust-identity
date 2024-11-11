import { Tenant, Client, Key, RateLimit, Group, LoginGroup, Scope } from "@/graphql/generated/graphql-types";
import TenantDAO from "./tenant-dao";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { randomUUID } from 'crypto'; 
import { GraphQLError } from "graphql";

const dataDir = process.env.FS_BASED_DATA_DIR ?? path.join(__dirname);

class FSBasedTenantDao extends TenantDAO {


        
    public async getTenants(): Promise<Array<Tenant>> {
        const tenants: Array<Tenant> = JSON.parse(this.getFileContents(`${dataDir}/tenants.json`, "[]"));
        return Promise.resolve(tenants);        
    }

    public async getTenantById(tenantId: string): Promise<Tenant | null> {
        const tenants: Array<Tenant> = await this.getTenants();
        const tenant: Tenant | undefined = tenants.find(
            (tenant: Tenant) => tenant.tenantId === tenantId
        )
        return tenant === undefined ? Promise.resolve(null) : Promise.resolve(tenant);
    }


    public async getClientsByTenant(tenantId: string): Promise<Array<Client>> {
        const allClients = await this.getClients();
        const clients: Array<Client> = allClients.filter(
            (client: Client) => client.tenantId === tenantId
        );
        return Promise.resolve(clients)
    }

    public async createTenant(tenant: Tenant): Promise<Tenant | null> {
        const tenants: Array<Tenant> = await this.getTenants();
        tenant.tenantId = randomUUID().toString();
        tenants.push(tenant);
        writeFileSync(`${dataDir}/tenants.json`, JSON.stringify(tenants), {encoding: "utf-8"});
        return Promise.resolve(tenant);
    }

    public async updateTenant(tenant: Tenant): Promise<Tenant> {
        const tenants: Array<Tenant> = await this.getTenants();
        const tenantToUpdate: Tenant | undefined = tenants.find(
            (t: Tenant) => t.tenantId === tenant.tenantId
        )
        if(!tenantToUpdate){
            throw new GraphQLError("ERROR_TENANT_NOT_FOUND");
        }
        tenantToUpdate.tenantName = tenant.tenantName;
        tenantToUpdate.tenantDescription = tenant.tenantDescription;
        tenantToUpdate.allowUnlimitedRate = tenant.allowUnlimitedRate;
        tenantToUpdate.claimsSupported = tenant.claimsSupported;
        tenantToUpdate.enabled = tenant.enabled;
        writeFileSync(`${dataDir}/tenants.json`, JSON.stringify(tenants), {encoding: "utf-8"});

        return Promise.resolve(tenant);
    }

    public async deleteTenant(tenantId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public async getClients(): Promise<Array<Client>> {
        const clients: Array<Client> = JSON.parse(this.getFileContents(`${dataDir}/clients.json`, "[]"));
        return Promise.resolve(clients);
    }

    public async getClientById(clientId: string): Promise<Client | null> {
        const clients = await this.getClients();
        const client: Client | undefined = clients.find(
            (client: Client) => client.clientId === clientId
        );
        return client === undefined ? Promise.resolve(null) : Promise.resolve(client);

    }

    public async createClient(client: Client): Promise<Client> {
        const tenant: Tenant | null = await this.getTenantById(client.tenantId);
        if(!tenant){
            throw new GraphQLError("ERROR_TENANT_NOT_FOUND", {

            })
        }

        const clients = await this.getClients();
        client.clientId = randomUUID().toString();
        clients.push(client);
        writeFileSync(`${dataDir}/clients.json`, JSON.stringify(clients), {encoding: "utf-8"});
        return Promise.resolve(client)
    }

    public async updateClient(client: Client): Promise<Client> {
        const clients: Array<Client> = await this.getClients();
        const clientToUpdate = clients.find(
            (c: Client) => {
                return c.clientId === client.clientId
            }
        );
        if(!clientToUpdate){
            throw new GraphQLError("ERROR_CLIENT_NOT_FOUND")
        }
        clientToUpdate.clientDescription = client.clientDescription;
        clientToUpdate.clientName = client.clientName;
        clientToUpdate.enabled = client.enabled;
        clientToUpdate.oidcEnabled = client.oidcEnabled;
        clientToUpdate.pkceEnabled = client.pkceEnabled;
        clientToUpdate.redirectUris = client.redirectUris;
        writeFileSync(`${dataDir}/clients.json`, JSON.stringify(clients), {encoding: "utf-8"})

        return Promise.resolve(client);
    }

    public async deleteClient(clientId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }


    public async getSigningKeysByTenant(tenantId: string): Promise<Array<Key>> {
        throw new Error("Method not implemented.");
    }
    createSigningKey(key: Key): Promise<Key> {
        throw new Error("Method not implemented.");
    }
    
    getSigningKeyById(keyId: string): Promise<Key> {
        throw new Error("Method not implemented.");
    }
    deleteSigningKey(keyId: String): Promise<Key> {
        throw new Error("Method not implemented.");
    }

 
    getRateLimitsByTenant(tenantId: string): Promise<Array<RateLimit>> {
        throw new Error("Method not implemented.");
    }
    createRateLimit(rateLimit: RateLimit): Promise<RateLimit> {
        throw new Error("Method not implemented.");
    }
    getRateLimitById(rateLimitId: string): Promise<RateLimit> {
        throw new Error("Method not implemented.");
    }
    updateRateLimit(rateLimit: RateLimit): Promise<RateLimit> {
        throw new Error("Method not implemented.");
    }
    deleteRateLimit(rateLimitId: string): Promise<RateLimit> {
        throw new Error("Method not implemented.");
    }


    getScopeForTenant(tenantId: string): Promise<Array<Scope>> {
        throw new Error("Method not implemented.");
    }
    getScopeById(scopeId: string): Promise<Scope> {
        throw new Error("Method not implemented.");
    }
    createScope(scope: Scope): Promise<Scope> {
        throw new Error("Method not implemented.");
    }
    updateScope(scope: Scope): Promise<Scope> {
        throw new Error("Method not implemented.");
    }
    deleteScope(scopeId: string): Promise<Scope> {
        throw new Error("Method not implemented.");
    }


    getLoginGroupsForTenant(tenantId: string): Promise<Array<LoginGroup>> {
        throw new Error("Method not implemented.");
    }
    getLoginGroupById(loginGroupId: string): Promise<LoginGroup> {
        throw new Error("Method not implemented.");
    }
    createLoginGroup(loginGroup: LoginGroup): Promise<LoginGroup> {
        throw new Error("Method not implemented.");
    }
    updateLoginGroup(loginGroup: LoginGroup): Promise<LoginGroup> {
        throw new Error("Method not implemented.");
    }
    deleteLoginGroup(loginGroupId: string): Promise<LoginGroup> {
        throw new Error("Method not implemented.");
    }


    getGroupsForTenant(tenantId: string): Promise<Array<Group>> {
        throw new Error("Method not implemented.");
    }
    getGroupById(groupId: string): Promise<Group> {
        throw new Error("Method not implemented.");
    }
    createGroup(group: Group): Promise<Group> {
        throw new Error("Method not implemented.");
    }
    updateGroup(group: Group): Promise<Group> {
        throw new Error("Method not implemented.");
    }
    deleteGroup(groupId: string): Promise<Group> {
        throw new Error("Method not implemented.");
    }

    protected getFileContents(fileName: string, defaultContents?: string): any {
        let fileContents; 

        if(!existsSync(fileName)){
            writeFileSync(fileName, defaultContents ?? "", {encoding: "utf-8"});
            fileContents = defaultContents ?? "";
        }
        else{
            fileContents = readFileSync(fileName, {encoding: "utf-8"});
        }
        return fileContents;
    }

}

export default FSBasedTenantDao;