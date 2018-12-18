<<<<<<< HEAD
=======
const express = require('express');
const router = express.Router();
const user = require('../models/user');
const { ensureLoggedIn, ensureCorrectUser } = require('../middleware/auth');

>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b
/** GET / - get list of users.
 *
 * => {users: [{username, first_name, last_name, phone}, ...]}
 *
 **/

<<<<<<< HEAD
=======
router.get('/', ensureLoggedIn, async function(req, res, next) {
  return res.json({ users: await user.all() });
});
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b

/** GET /:username - get detail of users.
 *
 * => {user: {username, first_name, last_name, phone, join_at, last_login_at}}
 *
 **/

<<<<<<< HEAD
=======
router.get('/:username', ensureCorrectUser, async function(req, res, next) {
  return res.json({ user: await user.get(req.params.username) });
});
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b

/** GET /:username/to - get messages to user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 from_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/

<<<<<<< HEAD
=======
router.get('/:username/to', ensureCorrectUser, async function(req, res, next) {
  return res.json({ messages: await user.messagesTo(req.params.username) });
});
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b

/** GET /:username/from - get messages from user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 to_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/
<<<<<<< HEAD
=======

router.get('/:username/from', ensureCorrectUser, async function(
  req,
  res,
  next
) {
  return res.json({ messages: await user.messagesFrom(req.params.username) });
});

module.exports = router;
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b
