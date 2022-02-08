var express = require('express');
var router = express.Router();

const { CreateFile } = require('../controllers/create-file')

router.get('/report', CreateFile);

module.exports = router;
