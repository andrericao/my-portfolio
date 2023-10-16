import mysql from 'mysql2/promise.js';
import * as dotenv from 'dotenv' ;
dotenv.config();

const connection = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env. MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DB
});

export { connection };