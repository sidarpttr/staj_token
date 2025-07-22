const { asyncErrorHandler } = require("../middlewares/errorHandler");
const paratikaService = require("../services/paratika.service");

exports.createPaymentSession = asyncErrorHandler(async (req, res) => {
    const { orderId, amount, returnUrl, failUrl } = req.body;
    const result = await paratikaService.createSession(
        orderId,
        amount,
        returnUrl,
        failUrl
    );
    res.status(200).json(result);
});

exports.queryPaymentStatus = asyncErrorHandler(async (req, res) => {
    const { sessionToken } = req.body;
    const result = await paratikaService.querySession(sessionToken);
    res.status(200).json(result);
});
