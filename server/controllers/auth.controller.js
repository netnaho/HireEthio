import { pool } from "../config/db.js"; // Importing the pool for database connection

export const handleFreelancerRegister = async (req, res) => {
  const { firstname, lastname, username, email, password, proffession, bio } =
    req.body;
  try {
    const [rows] = await pool.query(
      "SELECT * FROM freelancer WHERE Email = ?",
      [email]
    );
    if (rows.length > 0) {
      return res.status(400).json({ msg: "Freelancer already exists" });
    }

    const [result] = await pool.query(
      `INSERT INTO freelancer (FirstName, LastName, Username, Email, Password, Proffession, Bio)
VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [firstname, lastname, username, email, password, proffession, bio]
    );
    console.log(result);
    return res.json({ msg: "Freelancer registered successfully" });
  } catch (e) {
    console.log(e);
  }
};

export const handleClientRegister = async (req, res) => {
  const { firstname, lastname, username, email, password, clientType } =
    req.body;
  try {
    const [rows] = await pool.query("SELECT * FROM client WHERE Email = ?", [
      email,
    ]);
    if (rows.length > 0) {
      return res.status(400).json({ msg: "Client already exists" });
    }

    const [result] = await pool.query(
      `INSERT INTO client (FirstName, LastName, Username, Email, Password, Client_Type)
VALUES (?, ?, ?, ?, ?, ?)`,
      [firstname, lastname, username, email, password, clientType]
    );
    console.log(result);
    return res.json({ msg: "Client registered successfully" });
  } catch (e) {
    console.log(e);
  }
};

export const handleLogin = async (req, res) => {
  const { email, password, isClient } = req.body;
  try {
    if (isClient) {
      const [rows] = await pool.query("SELECT * FROM client WHERE Email = ?", [
        email,
      ]);
      if (rows.length === 0) {
        return res.status(400).json({ msg: "No such client" });
      }
      console.log(rows);
      if (rows[0].Password == password) {
        return res.json(rows);
      } else {
        return res.status(400).json("login failed");
      }
    } else {
      const [rows] = await pool.query(
        "SELECT * FROM freelancer WHERE Email = ?",
        [email]
      );
      if (rows.length === 0) {
        return res.status(400).json({ msg: "No such freelancer" });
      }
      console.log(rows);
      if (rows[0].Password == password) {
        return res.json(rows);
      } else {
        return res.status(400).json("login failed");
      }
    }
  } catch (error) {
    console.log("");
  }
};
