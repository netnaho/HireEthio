import { pool } from "../config/db.js";

export const createMessagePortal = async (req, res) => {
  const { isClient, clientId, freelancerId } = req.body;
  try {
    if (isClient) {
      const [rows] = await pool.query(
        `SELECT * FROM messageportal WHERE Client_ID = ? AND Freelancer_ID = ?`,
        [clientId, freelancerId]
      );
      if (rows.length > 0) {
        return res.json({ portalExists: true });
      }
      const [result] = await pool.query(
        `INSERT INTO messageportal (Client_ID, Freelancer_ID) VALUES (?, ?)`,
        [clientId, freelancerId]
      );
      return res.json("portal created successfully");
    }
  } catch (error) {
    console.log(err);
    res.status(400).json(err);
  }
};

export const getFreelancerChatList = async (req, res) => {
  const freelancerId = req.params.id;
  try {
    const [rows] = await pool.query(
      `SELECT 
    mp.MessagePortal_ID,
    mp.Client_ID,
    mp.Freelancer_ID,
    c.FirstName,
    c.LastName,
    c.Profile_Picture
FROM 
    MessagePortal mp
JOIN 
    Client c ON mp.Client_ID = c.Client_ID
WHERE 
    mp.Freelancer_ID = ?`,
      [freelancerId]
    );
    console.log(rows);
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

export const getClientChatList = async (req, res) => {
  const clientId = req.params.id;
  try {
    const [rows] = await pool.query(
      `SELECT 
    mp.MessagePortal_ID,
    mp.Client_ID,
    mp.Freelancer_ID,
    f.FirstName,
    f.LastName,
    f.Profile_Picture
    
FROM 
    MessagePortal mp
JOIN 
    Freelancer f ON mp.Freelancer_ID = f.Freelancer_ID
WHERE 
    mp.Client_ID = ?`,
      [clientId]
    );
    console.log(rows);
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

export const getSingleChatMessages = async (req, res) => {
  const chatId = req.params.id;
  try {
    const [rows] = await pool.query(
      `SELECT * FROM messages WHERE MessagePortal_ID = ?`,
      [chatId]
    );
    console.log(rows);
    return res.json(rows);
  } catch (error) {
    console.log(error);
  }
};

export const sendMessage = async (req, res) => {
  const { chatId, senderId, senderType, reciverId, reciverType, content } =
    req.body;
  try {
    const [rows] = await pool.query(
      `INSERT INTO messages (MessagePortal_ID, Sender_ID, Sender_Type, Receiver_ID, Receiver_Type, Content)
      VALUES (?, ?, ?, ?, ?, ?);`,
      [chatId, senderId, senderType, reciverId, reciverType, content]
    );
    return res.json(rows);
  } catch (error) {
    return res.status(400).json(error);
  }
};
