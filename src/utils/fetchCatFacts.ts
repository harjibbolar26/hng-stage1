import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

const catApi = process.env.CAT_FACT_API
if (!catApi) {
    throw new Error("Please provide the CAT_FACT_API in the environment variable.")
}

export const fetchCatFact = async () => {
    try {
        const res = await axios.get(catApi, { timeout: 5000 })
        return res.data.fact
    } catch (error) {
        console.error("Faled to fetch cat facts", error)
        return ("I wish i could get you a cat fact but something went wrong.")
    }
}