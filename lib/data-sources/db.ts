import 'reflect-metadata';
import { MikroORM, MySqlDriver } from '@mikro-orm/mysql';
import { TenantEntity } from "../entities/tenant-entity";


const connection = MikroORM.initSync(
    {
        dbName: "OPEN_CERTS_OIDC_IAM",
        user: "root",
        password: "sagman",
        host: "localhost",
        port: 3306,
        pool: {
            max: 10,
            min: 4
        },
        entities: [
            TenantEntity
        ]
    }
);

await connection.connect();

export default connection;


// export const AppDataSource: Sequelize = new Sequelize({
//     dialect: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "sagman",
//     database: "OPEN_CERTS_OIDC_IAM",
//     models: [
//         TenantEntity
//     ],
//     pool: {
//         max: 10,
//         min: 4
//     },
//     logging: true,
    

    // synchronize: false,
    // entities: [
    //     TenantEntity
    // ],
    // logging: true,
    // poolSize: 10,
    // extra: []
//});
// console.log('created new sequelize');
// AppDataSource
//     .authenticate()
//     .then(
//         () =>{
//             console.log("connection established")
//         }
//     )
//     .catch(err => {
//         console.log("error unable to connect to database", err);
//     })
//     ;

// AppDataSource.addModels([
//     TenantEntity
// ]);

//AppDataSource.sync();