import faker from 'faker';
import db from '../../config';

const insertText = `INSERT INTO users(name)
  VALUES($1) RETURNING *;`;

const insertValues = [`${faker.name.firstName()} ${faker.name.lastName()}`];
console.log(insertValues);
(async () => {
  // connect to a postgreSQL server.
  const client = await db.connect();
  try {
    // Parameterized query
    const response = await client.query(insertText, insertValues);
    console.log(response.rows);
  } catch (err) {
    console.log('Intervention error', err);
  } finally {
    client.release();
  }
})();
