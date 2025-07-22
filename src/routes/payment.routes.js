const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment.controller");

router.post("/create-session", paymentController.createPaymentSession);
router.post("/query-session", paymentController.queryPaymentStatus);

module.exports = router;
