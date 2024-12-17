import BaseKms from "./base-kms";


class FSBasedKms extends BaseKms {

    public async encrypt(data: string, aad?: string): Promise<string>{
        return Promise.resolve(data);
    }

    public async decrypt(data: string, aad?: string): Promise<string> {
        return Promise.resolve(data);
    }
    
}

export default FSBasedKms;