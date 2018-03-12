const express = require('express');
const bodyParser = require('body-parser');
require('env2')('./config.env');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true,
}));

router.get('/', require('./controllers/home.js'));

module.exports = router;
