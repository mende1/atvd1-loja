import 'reflect-metadata';
import { getConnectionOptions } from 'typeorm';
import app from './app';
import './db';

app.listen(3333, () =>
  console.log('\n[Server] Server is running on localhost:3333\n'));

const a = async () => {
  const options = await getConnectionOptions();
  console.log(options);
};

a();
