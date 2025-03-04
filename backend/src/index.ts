import express from "express";
import jwt from "jsonwebtoken";
import { UserModel, ContentModel } from "./db";
import { JWT_SECRET } from "./config";
import { userMiddleware } from "./middleware";


const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies.
//app.use(cors()); // Middleware to allow cross-origin requests.

// Route 1: User Signup
app.post("/api/v1/signup", async (req, res) => {
    // TODO: Use zod or a similar library for input validation.
    // TODO: Hash the password before storing it in the database.
    const username = req.body.username;
    const password = req.body.password;

    try {
        // Create a new user with the provided username and password.
        await UserModel.create({ 
            username: username, 
            passowrd: password });
        
        res.json({ message: "User signed up" }); // Send success response.
    } catch (e) {
        // Handle errors like duplicate usernames.
        res.status(409).json({ message: "User already exists" }); // Conflict status.
    }
});

// Route 2: User Signin
app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Find a user with the provided credentials.
    const existingUser = await UserModel.findOne({ username, password });
    if (existingUser) {
        // Generate a JWT token with the user's ID.
        const token = jwt.sign({ id: existingUser._id }, JWT_SECRET);
        res.json({ token }); // Send the token in response.
    } else {
        // Send error response for invalid credentials.
        res.status(403).json({ message: "Incorrect credentials" });
    }
});

// Route 3: Add Content
app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const { link, type, title } = req.body;
    // Create a new content entry linked to the logged-in user.
    await ContentModel.create({
        link,
        type,
        title,
        //@ts-ignore
        userId: req.userId, // userId is added by the middleware.
        tags: [] // Initialize tags as an empty array.
    });

    res.json({ message: "Content added" }); // Send success response.
});



// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

