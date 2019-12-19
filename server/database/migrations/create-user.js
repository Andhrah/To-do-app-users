import db from '../../config';

export const userSchema = (async () => {
  try {
    await db.connect((err, client, release) => {
      // connect to a postgreSQL server and if any error while connecting log it.
      if (err) {
        return console.log('Could not connect to the server, check your internet connection');
      }
      const user = `CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, 
        name VARCHAR(255) NOT NULL
      );`;
      client.query(user, (error, response) => {
        if (error) {
          console.error('Error creating users table', error);
        }
        console.log('user table >>>', response.rows);
      });
      release();
    });
  } catch (err) {
    console.log('userSchema >>>', err);
  }
})();
