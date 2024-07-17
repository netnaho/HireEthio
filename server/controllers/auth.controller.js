import { pool } from "../config/db.js"; // Importing the pool for database connection
import bcrypt from "bcrypt";

export const handleFreelancerRegister = async (req, res) => {
  const { firstname, lastname, username, email, password, profession, bio } =
    req.body;
  const image = req.files[0].filename;
  const resume = req.files[1].filename;
  try {
    const [rows] = await pool.query(
      "SELECT * FROM freelancer WHERE Email = ?",
      [email]
    );
    if (rows.length > 0) {
      return res.status(400).json({ msg: "Freelancer already exists" });
    }
    const hassedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      `INSERT INTO freelancer (FirstName, LastName, Username, Email, Password, Proffession, Bio, Profile_Picture, Resume)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        firstname,
        lastname,
        username,
        email,
        hassedPassword,
        profession,
        bio,
        image,
        resume,
      ]
    );
    console.log(result);
    return res.json({ msg: "Freelancer registered successfully" });
  } catch (e) {
    console.log(e.message);
  }
};

export const handleClientRegister = async (req, res) => {
  const { firstname, lastname, username, email, password, clientType } =
    req.body;
  const image = req.file.filename;
  try {
    const [rows] = await pool.query("SELECT * FROM client WHERE Email = ?", [
      email,
    ]);
    if (rows.length > 0) {
      return res.status(400).json({ msg: "Client already exists" });
    }
    const hassedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      `INSERT INTO client (FirstName, LastName, Username, Email, Password, Client_Type, Profile_Picture)
VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [firstname, lastname, username, email, hassedPassword, clientType, image]
    );
    console.log(result);
    return res.json({
      msg: "Client registered successfully",
    });
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
      const client = rows[0];
      const isMatch = await bcrypt.compare(password, client.Password);
      if (isMatch) {
        req.session.userInfo = { isClient: isClient, userData: client };
        console.log(req.session.userData);
        return res.json({ info: rows[0], isClient: isClient });
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

      const freelancer = rows[0];
      const isMatch = await bcrypt.compare(password, freelancer.Password);
      if (isMatch) {
        req.session.userInfo = { isClient: isClient, userData: freelancer };
        console.log(req.session.userData);
        return res.json({ info: rows[0], isClient: isClient });
      } else {
        return res.status(400).json("login failed");
      }
    }
  } catch (error) {
    console.log(error);
  }
};
