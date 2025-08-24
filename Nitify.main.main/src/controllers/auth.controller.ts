import { Request, Response } from "express"
import { hashPassword, comparePassword } from "../utils";
import { UserModel } from "../db";
import jwt from "jsonwebtoken";
import { JWT_secret } from "../config";

export const registerUser = async (req: Request, res: Response) => {
    const username = req.body.username;
    const password = req.body.password;
    
    console.log("username: ", username)
    
    const hashedPassword = await hashPassword(password);
    console.log("password: ", hashedPassword);
    
    try {
        await UserModel.create({
            username: username,
            password: hashedPassword
        });

        res.status(200).json({
            message: "user signed up"
        });

    } catch (err) {
        console.log("Error: ", err);
        res.status(409).json({
            message: "user already exists"
        });
    }
}

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    console.log("username: ", username)
    console.log("password: ", password)
    
    const existinguser = await UserModel.findOne({
        username: username
    })

    // @ts-ignore
    const isPasswordMatched = await comparePassword(password, existinguser.password)

    if (existinguser && isPasswordMatched) {
        // create JWT
        const JWT_TOKEN = jwt.sign({
            id: existinguser._id
        }, JWT_secret);

        // create session cookie
        res.cookie("sessiontoken", JWT_TOKEN, { 
            httpOnly: false, // can't access via JS — safer!
            secure: true, // only HTTPS in prod
            sameSite: "none", // or "none" + secure: true for cross-site
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.status(200).json({
            jwtToken : JWT_TOKEN
        });
    } else {
        res.status(401).json({
            message: "user credentials invalid"
        })
    }
}

export const checkUserAuthenticated = async (req: Request, res: Response) => {
    // @ts-ignore
    const userId = req.userId;

    const user = await UserModel.findById(userId)

    if (!user) {
        res.status(401).json({
            message: "user unauthenticated",
            authenticated: false
        });
        return;
    }
    
    res.json({
        authenticated: true,
        username: user.username
    })

}

export const getUserCredentials = async (req: Request, res: Response) => {
    // @ts-ignore
    const  userId = req.userId
    const userCreds = await UserModel.findOne({
        _id: userId
    })

    if (!userCreds) {
        res.status(411).json({
            message: "user not found"
        })
        return;
    }

    res.status(200).json({
        username: userCreds.username
    });

}
