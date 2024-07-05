    import mysql from "mysql2/promise"


    export const pool = mysql.createPool({
        host:"localhost",
        user:"root",
        password: "",
        database: "hireethio",
        connectionLimit: 10,
        waitForConnections: true,
        queueLimit: 0,
    });

    export const connectDB = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('MySQL connected with connection pooling');
        connection.release();
    } catch (error) {
        console.error('Unable to connect to the database Becuase of:', error);
    }
    };

