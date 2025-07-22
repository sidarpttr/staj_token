const asyncErrorHandler = (handler) => {
    return async (req, res, next) => {
        try {
            await handler(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};

const globalErrorHandler = (err, req, res, next) => {
    console.log("Hata!  ", err);
    const statusCode = err.statusCode || 500;
    const response = {
        success: false,
        message:
            process.env.NODE_ENV === "development"
                ? err.message
                : "Sunucuda bir hata oluştu.",
    };

    if (process.env.NODE_ENV === "development") {
        response.stack = err.stack;
    }

    res.status(statusCode).json(response);
};

module.exports = globalErrorHandler;
module.exports.asyncErrorHandler = asyncErrorHandler;
