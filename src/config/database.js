const sql = require("mssql");

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: "localhost",
    port: 18720,
    database: process.env.PaymentSystemDB,
    options: {
        encrypt: false,
        enableArithAbort: true,
        trustServerCertificate: true,
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
};

let pool;

async function connectDB() {
    if (pool) return pool;
    try {
        pool = await sql.connect(dbConfig);
        console.log("MSSQL bağlantısı başarılı.");
        return pool;
    } catch (err) {
        console.error("MSSQL bağlantı hatası:", err);
        throw err;
    }
}

module.exports = {
    connectDB,
    sql,
};
