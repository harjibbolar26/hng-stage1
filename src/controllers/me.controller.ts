import {Response, Request} from "express"
import { fetchCatFact } from "../utils/fetchCatFacts"

export const getProfile = async (req: Request, res: Response) => {
    try {
        const catFact = await fetchCatFact()
        const response = {
            status: "success",
            user: {
                email: process.env.USER_EMAIL,
                name: process.env.USER_NAME,
                stackemail: process.env.USER_STACK,
            },
            timestamp: new Date().toISOString(),
            fact: catFact
        }
        res.status(200).json(response)
    } catch (error: any) {
        console.error("Failed to fetch cat fact", error.message)
        res.status(500).json({
            status: "error",
            message: "Unable to fetch cat fact at this moment",
            timestamp: new Date().toISOString()
        })
    }
}