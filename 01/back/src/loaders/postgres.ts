import {Client} from "pg";
import {connectConfig} from '../config/postgres.config';

export default async (): Promise<any> => {
    try {
        const client = new Client(connectConfig);
        await client.connect();
        return client;
    }catch (e) {
       console.error(e)
    }
    return null
}

