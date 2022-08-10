const express = require('express');
const Routes = require('../../config/app.routes');
const router = express.Router();
router.use(Routes().ERROR_PATH, (req, res) => {
    res.send('Error page!');
});
module.exports = router;
