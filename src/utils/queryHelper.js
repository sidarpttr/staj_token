const { connectDB, sql } = require("./../config/database");

class QueryHelper {
    static async run(query, params = []) {
        const pool = await connectDB();
        const request = pool.request();

        for (const param of params) {
            const [key, type, value] = param;
            request.input(key, type, value);
        }

        const result = await request.query(query);
        return result.recordset;
    }

    static TYPES = sql;
}

module.exports = QueryHelper;
