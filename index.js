require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const globalErrorHandler = require("./src/middlewares/errorHandler");
const paymentRoutes = require("./src/routes/payment.routes");

//DATABASE BAGLANTI
const { connectDB } = require("./src/config/database");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/payment", paymentRoutes);

app.use(globalErrorHandler);

connectDB()
    .then(() => {
        const port = process.env.PORT;
        app.listen(port || 5000, () => {
            console.log(`server ${port} portunda çalışıyor...`);
        });
    })
    .catch(() => {
        console.log("sunucu başlatılamadı.");
    });
