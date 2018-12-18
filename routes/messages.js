<<<<<<< HEAD
=======
const express = require('express');
const router = express.Router();
const user = require('../models/user');
const message = require('../models/message');
const db = require('../db');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config.js');

const {
  ensureLoggedIn,
  ensureCorrectUser,
  ensureSenderRecipient,
  ensureRecipient
} = require('../middleware/auth');

>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b
/** GET /:id - get detail of message.
 *
 * => {message: {id,
 *               body,
 *               sent_at,
 *               read_at,
 *               from_user: {username, first_name, last_name, phone},
 *               to_user: {username, first_name, last_name, phone}}
 *
 * Make sure that the currently-logged-in users is either the to or from user.
 *
 **/

<<<<<<< HEAD

=======
router.get('/:id', ensureSenderRecipient, ensureCorrectUser, async function(
  req,
  res,
  next
) {
  return res.json(await message.get(req.params.id));
});
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b
/** POST / - post message.
 *
 * {to_username, body} =>
 *   {message: {id, from_username, to_username, body, sent_at}}
 *
 **/
<<<<<<< HEAD

=======
router.post('/', ensureLoggedIn, async function(req, res, next) {
  const token = req.body._token || req.query._token;
  const { to_username, body } = req.body;
  let { username } = jwt.verify(token, SECRET_KEY);
  const confirm = await message.create({
    from_username: username,
    to_username,
    body
  });
  return res.json({ message: confirm });
});
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b

/** POST/:id/read - mark message as read:
 *
 *  => {message: {id, read_at}}
 *
 * Make sure that the only the intended recipient can mark as read.
 *
 **/

<<<<<<< HEAD
=======
router.post('/', ensureRecipient, ensureLoggedIn, async function(
  req,
  res,
  next
) {
  return res.json(await message.markRead(req.params.id));
});

module.exports = router;
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b
