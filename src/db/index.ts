import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asdf',
  database: 'atividade1',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database connected');
});

export default db;
