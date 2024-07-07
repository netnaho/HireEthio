import mysql from "mysql2/promise";

export const connectDB = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("MySQL connected with connection pooling");
    connection.release();
  } catch (error) {
    console.error("Unable to connect to the database Becuase of:", error);
  }
};
