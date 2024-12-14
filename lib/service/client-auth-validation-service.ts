import { Client, ClientAuthHistory, Tenant } from "@/graphql/generated/graphql-types";
import { decodeJwt, JWTPayload, jwtVerify, JWTVerifyResult } from "jose";
import TenantDao from "@/lib/dao/tenant-dao";
import ClientDao from "@/lib/dao/client-dao";
import { getClientDaoImpl, getTenantDaoImpl } from "@/utils/dao-utils";
import { createSecretKey, KeyObject } from "node:crypto";
import { CLIENT_SECRET_ENCODING } from "@/utils/consts";

const {
    AUTH_DOMAIN
} = process.env;

const tenantDao: TenantDao = getTenantDaoImpl();
const clientDao: ClientDao = getClientDaoImpl();

class ClientAuthValidationService {


    /**
     * @param clientId 
     * @param clientSecret 
     * @returns 
     */
    public async validateClientAuthCredentials(clientId: string, clientSecret: string): Promise<boolean> {
        const client: Client | null = await clientDao.getClientById(clientId);
        if(!client){
            return Promise.resolve(false);
        }
        if(client.clientSecret !== clientSecret){
            return Promise.resolve(false);
        }
        return Promise.resolve(true);
    }

    


}

export default ClientAuthValidationService;