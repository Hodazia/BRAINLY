"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const config_1 = require("./config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userMiddleware = (req, res, next) => {
    const header = req.headers["Authorization"];
    // the token is put in headers, now decode the token
    const decoded = jsonwebtoken_1.default.verify(header, config_1.JWT_SECRET);
    // If the token is successfully decoded, attach the user ID to the request object.
    if (decoded) {
        // @ts-ignore
        req.userId = decoded.id; // Store the decoded user ID for later use in request handling.
        next(); // Call the next middleware or route handler.
    }
    else {
        // If the token is invalid, send a 401 Unauthorized response.
        res.status(401).json({ message: "Unauthorized User" });
    }
};
exports.userMiddleware = userMiddleware;
