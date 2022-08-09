const Response = () => {
    const successMessage = (code, msg, data) => ({
        code: code,
        msg: msg,
        data: data,
    });
    const errorMessage = (code, msg) => ({
        code: code,
        msg: msg,
    });
    return {
        successMessage, errorMessage
    }
}

module.exports = Response;
