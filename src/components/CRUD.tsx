import mysql from 'mysql2/promise';
 
async function connectToDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'your_username',
            password: 'your_password',
            database: 'your_database'
        });
        console.log('Connected to MariaDB');
        return connection;
    } catch (error) {
        console.error('Error connecting to MariaDB:', error);
        throw error;
    }
}
 
connectToDatabase();