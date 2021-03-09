import { config } from 'dotenv';
import App from './app';

config();

const server = App;
server.listen(
  process.env.PORT,
  () => console.log(`SERVER ONLINE ON PORT ${process.env.PORT}!`)
);