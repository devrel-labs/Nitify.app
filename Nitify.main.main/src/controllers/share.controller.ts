import { Request, Response } from "express";
import { ContentModel, LinkModel, UserModel } from "../db";
import { random } from "../utils";


export const registerNitifyShareLink = async (req: Request, res: Response) => {
    const isshare = req.body.share || false;

    if ( isshare ) {
        const existingLink = await LinkModel.findOne({
            // @ts-ignore
            userId: req.userId
        })

        if ( existingLink ) {
            res.status(200).json({
                linkHashId: existingLink.hash
            });

            return;
        }

        const linkHashId = random(50);
        await LinkModel.create({
            hash: linkHashId,
            // @ts-ignore
            userId: req.userId
        })

        res.json({
            linkHashId: linkHashId
        })

        return;
    } else {
        await LinkModel.deleteOne({
            // @ts-ignore
            userId: req.userId
        });

        res.json({
            message: "Link Deleted"
        })

        return;
    }
}


export const handleNitifyShareLink = async (req: Request, res: Response) => {
    const hashId = req.params.sharelink

    console.log(hashId)

    const link = await LinkModel.findOne({
        hash: hashId
    })

    console.log(link)

    if (!link) {
        res.status(411).json({
            message: "Sorry Incorrect Input"
        })
        return;
    }

    

    const content = await ContentModel.find({
        userId: link?.userId
    })

    const user = await UserModel.findOne({
        _id: link?.userId.toString()
    })

    console.log(user);

    if (!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happend"
        })
    }

    res.json({
        username: user?.username,
        content: content
    })
}
