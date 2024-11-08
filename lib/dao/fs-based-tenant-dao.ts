import { Tenant, Client, Key, RateLimit } from "@/graphql/generated/graphql-types";
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

    public async getClientsByTenant(tenantId: string): Promise<Array<Client>> {
        const allClients = await this.getClients();
        const clients: Array<Client> = allClients.filter(
            (client: Client) => client.tenantId === tenantId
        );
        return Promise.resolve(clients)
    }

    public async addTenant(tenant: Tenant): Promise<Tenant | null> {
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
        tenantToUpdate.allowUnlimitedRate = tenant.allowUnlimitedRate;
        tenantToUpdate.allowedScopeValues = tenant.allowedScopeValues;
        tenantToUpdate.claimsSupported = tenant.claimsSupported;
        tenantToUpdate.enabled = tenant.enabled;
        writeFileSync(`${dataDir}/tenants.json`, JSON.stringify(tenants), {encoding: "utf-8"});

        // Need to update all clients with changes to scope, that is, if some scope values have been removed.
        // 1. get all clients by tenant id
        // 2. check to make sure they don't contain any scope values that are absent in the tenant.
        // 3. if they do, remove them and save.
        return Promise.resolve(tenant);
    }

    public async deleteTenant(tenantId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async addClient(tenantId: string, client: Client): Promise<Client> {
        const tenant: Tenant | null = await this.getTenantById(tenantId);
        if(!tenant){
            throw new GraphQLError("ERROR_TENANT_NOT_FOUND", {

            })
        }

        const clients = await this.getClients();
        client.tenantId = tenantId;
        client.clientId = randomUUID().toString();
        clients.push(client);
        writeFileSync(`${dataDir}/clients.json`, JSON.stringify(clients));
        return Promise.resolve(client)
    }

    public async updateClient(client: Client): Promise<Client> {
        throw new Error("Method not implemented.");
    }

    public async deleteClient(clientId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public async getSigningKeys(): Promise<Array<Key>> {
        throw new Error("Method not implemented.");
    }

    public async createRateLimitDefinition(rateLimitDef: RateLimit): Promise<RateLimit> {
        throw new Error("Method not implemented.");
    }

    public async updateRateLimitDefinition(rateLimitDef: RateLimit): Promise<RateLimit> {
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