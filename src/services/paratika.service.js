const axios = require("axios");

const PARATIKA_BASE = process.env.PARATIKA_API_BASE;

function getAuthFields() {
    return {
        MERCHANTUSER: process.env.PARATIKA_MERCHANTUSER,
        MERCHANTPASSWORD: process.env.PARATIKA_MERCHANTPASSWORD,
        MERCHANT: process.env.PARATIKA_MERCHANT,
    };
}

async function createSession(orderId, amount, returnUrl, failUrl) {
    const payload = {
        ...getAuthFields(),
        ORDERID: orderId,
        AMOUNT: amount,
        CURRENCY: "TRY",
        RETURNURL: returnUrl,
        FAILURL: failUrl,
        ...{
            CUSTOMEREMAIL: "test@deneme.com",
        },
    };

    const { data } = await axios.post(`${PARATIKA_BASE}/session`, payload);
    return data;
}

async function querySession(sessionToken) {
    const payload = {
        ...getAuthFields(),
        SESSIONTOKEN: sessionToken,
    };

    const { data } = await axios.post(`${PARATIKA_BASE}/query`, payload);
    return data;
}

module.exports = {
    createSession,
    querySession,
};
