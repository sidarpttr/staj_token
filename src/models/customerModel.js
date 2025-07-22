const QueryHelper = require("../utils/queryHelper");
const T = QueryHelper.TYPES;

exports.createCustomer = async ({
    FullName,
    Email,
    CardNumber,
    ExpiryMonth,
    ExpiryYear,
    CVV,
    Description,
}) => {
    const result = await QueryHelper.run(
        `INSERT INTO TestCustomers 
     (FullName, Email, CardNumber, ExpiryMonth, ExpiryYear, CVV, Description)
     OUTPUT INSERTED.*
     VALUES (@FullName, @Email, @CardNumber, @ExpiryMonth, @ExpiryYear, @CVV, @Description)`,
        [
            ["FullName", T.NVarChar, FullName],
            ["Email", T.NVarChar, Email],
            ["CardNumber", T.NVarChar, CardNumber],
            ["ExpiryMonth", T.Int, ExpiryMonth],
            ["ExpiryYear", T.Int, ExpiryYear],
            ["CVV", T.NVarChar, CVV],
            ["Description", T.NVarChar, Description],
        ]
    );
    return result[0];
};
