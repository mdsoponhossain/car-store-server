import dotenv from 'dotenv';
dotenv.config({ path: process.cwd() + '/.env' });

const port = 3000;

const configInfo = {
  // db_url: process.env.DB_URL,
  db_url: process.env.DEVELOPMENT,
  salt_round: process.env.SALT_ROUND,
  port,
};

export default configInfo;
