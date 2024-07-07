import { pool } from '../config/db.js';
import multer from 'multer';
import path from 'path';

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Directory where files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // File naming
    }
});

const upload = multer({ storage: storage });

export const handleLogin = async (req, res) => {
    console.log("We are authenticating your information, please wait...");
    const { Username, Password, userType } = req.body;
    try {
        // Get a connection from the pool
        const connection = await pool.getConnection();

        // Query to check if username and password match
        let rows;
        if (userType == '1') {
            [rows] = await connection.execute(
                'SELECT * FROM freelancer WHERE Username = ? AND Password = ?',
                [Username, Password]
            );
        } else {
            [rows] = await connection.execute(
                'SELECT * FROM client WHERE Username = ? AND Password = ?',
                [Username, Password]
            );
        }

        connection.release(); // Release the connection back to the pool

        if (rows.length > 0) {
            res.json({ message: '1' });
        } else {
            res.json({ message: 'Invalid Username or Password' });
        }
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).send('Internal server error');
    }
};

export const handleRegister = async (req, res) => {
    console.log("We are registering you to the system, please wait...");
    const { firstName, lastName, Username, Email, Password, Profession, Bio } = req.body;

    try {
        // Get a connection from the pool
        const connection = await pool.getConnection();

        // Process image upload (if provided)
        let profilePicture = null;
        if (req.file) {
            profilePicture = req.file.filename; // Assuming 'filename' is stored in 'uploads' directory
        }

        // Insert the new user into the database with profile picture
        const [result] = await connection.execute(
            'INSERT INTO freelancer (FirstName, LastName, Username, Email, Password, Proffession, Bio, Profile_Picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [firstName, lastName, Username, Email, Password, Profession, Bio, profilePicture]
        );

        connection.release(); // Release the connection back to the pool

        res.status(201).json({message: '1'});
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).send('Internal server error');
    }
};
