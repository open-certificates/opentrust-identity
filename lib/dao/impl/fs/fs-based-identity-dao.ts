import { Group, LoginGroup, User } from "@/graphql/generated/graphql-types";
import IdentityDao from "../../identity-dao";

class FSBasedIdentityDAO extends IdentityDao {
    
    getUserGroups(userId: string): Promise<Array<Group>> {
        throw new Error("Method not implemented.");
    }
    getUserLoginGroups(userId: string): Promise<Array<LoginGroup>> {
        throw new Error("Method not implemented.");
    }
    
    getUsers(clientId: string): Promise<Array<User>> {
        throw new Error("Method not implemented.");
    }
    loginUser(username: string, password: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    createUser(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    updateUser(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    deleteUser(userId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}

export default FSBasedIdentityDAO;