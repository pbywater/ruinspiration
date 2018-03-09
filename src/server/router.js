const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
require('env2')('./config.env');

const { checkSignIn } = require('./../helpers/helpers.js');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true,
}));

const session = cookieSession({
  name: 'authenticated',
  secret: process.env.SESSION_SECRET,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    signed: true,
    maxAge: 1 * 60 * 60 * 1000, // 1 hour
  },
});

router.use(session);

router.get('/', require('./controllers/home.js'));

module.exports = router;
