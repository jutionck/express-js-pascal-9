const express = require('express');
const Routes = require("../../config/app.routes");
const router = express.Router();
router.use(Routes().ERROR_PATH, (req, res) => {
    res.status(500).json({
        code: res.statusCode,
        message: `Oops, Internal server error!`
    });
});
module.exports = router;
