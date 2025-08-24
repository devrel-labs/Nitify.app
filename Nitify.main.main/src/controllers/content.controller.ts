import { Request, Response } from "express";
import { ContentModel } from "../db";


export const addUserContent = async (req: Request, res: Response) => {
    const title = req.body.title;
    const link = req.body.link;
    const type = req.body.type;

    try {

        await ContentModel.create({
            title: title,
            link: link,
            type: type,
            // @ts-ignore
            userId: req.userId,
            tages: []
        })

        res.status(200).json({
            message: "content added"
        })

    } catch (err) {
        res.status(400).json({
            message: "content added failed"
        })
    }
}

export const getUserContent = async (req: Request, res: Response) => {
    try {
        const userContents = await ContentModel.find({
            // @ts-ignore
            userId: req.userId
        }).populate("userId", "username");
    
        res.status(200).json({
            userContents
        })
    } catch (err) {
        res.status(401).json({
            message: "user unauthorized"
        })
    }
}

export const deleteUserContent = async (req: Request, res: Response) => {
    const title = req.body.title;

    const result = await ContentModel.deleteOne({
        title: title,
        // @ts-ignore
        userId: req.userId
    })

    console.log(result);

    res.json({
        message: "Content Deleted"
    })
}
