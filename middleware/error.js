const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    //Log for dev
    console.log(err);

    //Mongoose duplicate key Id error
    if (err.code == 11000) {
        const message = 'Bootcamp allready exists. Please enter new Bootcamp'
        error = new ErrorResponse(message, 400)
    }

    // Mongoose bad object Id
    if (err.name == "CastError") {
        const message = `Resource not found`;
        error = new ErrorResponse(message, 404);
    }

    //Mongoose validation error for example required field not passed
    if (err.name == 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({ success: false, error: error.message || 'Server error' })

}

module.exports = errorHandler;