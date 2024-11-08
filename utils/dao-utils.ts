import FSBasedTenantDao from "@/lib/dao/fs-based-tenant-dao";
import TenantDao from "@/lib/dao/tenant-dao";


export function getTenantDaoImpl(): TenantDao {
    // DAO_STRATEGY is one of filesystem | postgresql | mysql | oracle | mssql | cassandra | mongodb
    const daoStrategy = process.env.DAO_STRATEGY ?? "filesystem";

    if(daoStrategy === "filesystem"){
        return new FSBasedTenantDao();
    }
    else return new FSBasedTenantDao();
}