const generalErrors = async (error, req, res, next) => {
    return res.status(error.status || 500).json({
        message: error.message || "Error interno del servidor",
    });
};

module.exports = generalErrors;