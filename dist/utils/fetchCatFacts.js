"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCatFact = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const catApi = process.env.CAT_FACT_API;
if (!catApi) {
    throw new Error("Please provide the CAT_FACT_API in the environment variable.");
}
const fetchCatFact = async () => {
    try {
        const res = await axios_1.default.get(catApi, { timeout: 5000 });
        return res.data.fact;
    }
    catch (error) {
        console.error("Faled to fetch cat facts", error);
        return ("I wish i could get you a cat fact but something went wrong.");
    }
};
exports.fetchCatFact = fetchCatFact;
