import { createConnection, Connection } from 'typeorm';

async function connection(): Promise<Connection> {
  return await createConnection();
}

export default connection;
