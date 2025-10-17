"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = void 0;
const fetchCatFacts_1 = require("../utils/fetchCatFacts");
const getProfile = async (req, res) => {
    try {
        const catFact = await (0, fetchCatFacts_1.fetchCatFact)();
        const response = {
            status: "success",
            user: {
                email: process.env.USER_EMAIL,
                name: process.env.USER_NAME,
                stackemail: process.env.USER_STACK,
            },
            timestamp: new Date().toISOString(),
            fact: catFact
        };
        res.status(200).json(response);
    }
    catch (error) {
        console.error("Failed to fetch cat fact", error.message);
        res.status(500).json({
            status: "error",
            message: "Unable to fetch cat fact at this moment",
            timestamp: new Date().toISOString()
        });
    }
};
exports.getProfile = getProfile;
