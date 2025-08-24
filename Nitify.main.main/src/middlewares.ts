import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import {JWT_secret} from "./config"


// export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {

//     const header = req.headers["authorization"];
//     if (!header) {
//         res.json({
//             message: "token not found"
//         })
//     }

//     const decoded = jwt.verify(header as string, JWT_secret);

//     if (decoded) {
//         // @ts-ignore
//         req.userId = decoded.id;
//         next()
//     } else {
//         res.status(403).json({
//             message: "you're not logged in"
//         })
//         next()
//     }

// }
export const userMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.cookies.token;

    if (!token) {
        res.status(401).json({ message: "Token not found" });
        return;
    }

    try {
        const decoded = jwt.verify(token, JWT_secret);
        // @ts-ignore
        req.userId = decoded.id;
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid token" });
        return;
    }
};
