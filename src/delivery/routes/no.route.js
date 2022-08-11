const noRoute = (req, res) => {
    res.status(404).json({
        code: res.statusCode,
        message: `Oops, page not found!`
    });
}
module.exports = noRoute;
