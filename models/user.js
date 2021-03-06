<<<<<<< HEAD
/** User class for message.ly */



/** User of the site. */

class User {

=======
const bcrypt = require('bcrypt');
const db = require('../db');
/** User class for message.ly */

/** User of the site. */

class User {
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b
  /** register new user -- returns
   *    {username, password, first_name, last_name, phone}
   */

<<<<<<< HEAD
  static async register({username, password, first_name, last_name, phone}) { }

  /** Authenticate: is this username/password valid? Returns boolean. */

  static async authenticate(username, password) { }

  /** Update last_login_at for user */

  static async updateLoginTimestamp(username) { }
=======
  static async register({ username, password, first_name, last_name, phone }) {
    // Model does hashing and is not exposed to req.body or res.json
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await db.query(
      `INSERT INTO users (username, password, first_name, last_name, phone, join_at) 
      VALUES ($1, $2, $3, $4, $5, current_timestamp)
      RETURNING username, password, first_name, last_name, phone`,
      [username, hashedPassword, first_name, last_name, phone]
    );
    console.log('POST INSERT _________', result.rows[0]);
    return result.rows[0];
  }

  /** Authenticate: is this username/password valid? Returns boolean. */

  static async authenticate(username, password) {
    const result = await db.query(
      'SELECT password FROM users WHERE username = $1',
      [username]
    );
    let user = result.rows[0];

    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        return true;
      }
    }
    return false;
  }
  /** Update last_login_at for user */

  static async updateLoginTimestamp(username) {
    const result = await db.query(
      `UPDATE users SET last_login_at = current_timestamp WHERE username = $1
      RETURNING username, last_login_at`,
      [username]
    );
    if (!result.rows[0]) {
      throw new Error(`No username ${username} found`);
    }
    return result.rows[0];
  }
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b

  /** All: basic info on all users:
   * [{username, first_name, last_name}, ...] */

<<<<<<< HEAD
  static async all() { }
=======
  static async all() {
    const result = await db.query(
      `SELECT username,first_name,last_name,phone,join_at,last_login_at FROM users`
    );
    if (result.rows.length === 0) {
      throw new Error(`No users found`);
    }
    let r = result.rows;
    return r.map(user => {
      return {
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone
      };
    });
  }
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b

  /** Get: get user by username
   *
   * returns {username,
   *          first_name,
   *          last_name,
   *          phone,
   *          join_at,
   *          last_login_at } */

<<<<<<< HEAD
  static async get(username) { }
=======
  static async get(username) {
    const results = await db.query(
      `SELECT username, first_name, last_name, phone, join_at, last_login_at at FROM users WHERE username = $1`,
      [username]
    );
    if (!results.rows[0]) {
      throw new Error(`No user found with the username: ${username}`);
    }
    return results.row[0];
  }
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b

  /** Return messages from this user.
   *
   * [{id, to_user, body, sent_at, read_at}]
   *
   * where to_user is
   *   {username, first_name, last_name, phone}
   */

<<<<<<< HEAD
  static async messagesFrom(username) { }
=======
  static async messagesFrom(username) {
    const results = await db.query(
      `SELECT m.id, t.username AS to_username, t.first_name AS to_first_name, t.last_name AS to_last_name, t.phone AS to_phone, body, sent_at, read_at FROM messages AS m
      JOIN users AS t ON to_username = t.username
      WHERE from_username = $1`,
      [username]
    );
    if (!results.rows[0]) {
      throw new Error(`No messages found from ${username}`);
    }

    let messages = [];
    let r = results.rows;

    for (let i = 0; i < r.length; i++) {
      // make it into map statement
      messages.push({
        id: r[i].id,
        to_user: {
          username: r[i].to_username,
          first_name: r[i].to_first_name,
          last_name: r[i].to_last_name,
          phone: r[i].to_phone
        },
        body: r[i].body,
        sent_at: r[i].sent_at,
        read_at: r[i].read_at
      });
    }
    return messages;
  }
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b

  /** Return messages to this user.
   *
   * [{id, from_user, body, sent_at, read_at}]
   *
   * where from_user is
   *   {id, first_name, last_name, phone}
   */

<<<<<<< HEAD
  static async messagesTo(username) { }
}


module.exports = User;
=======
  static async messagesTo(username) {
    const results = await db.query(
      `SELECT m.id, f.username AS from_username, f.first_name AS from_first_name, f.last_name AS from_last_name, f.phone AS from_phone, body, sent_at, read_at FROM messages AS m
      JOIN users AS f ON from_username = f.username
      WHERE to_username = $1`,
      [username]
    );

    if (!results.rows[0]) {
      throw new Error(`No messages found to ${username}`);
    }

    let messages = [];
    let r = results.rows;

    for (let i = 0; i < r.length; i++) {
      messages.push({
        id: r[i].id,
        from_user: {
          username: r[i].from_username,
          first_name: r[i].from_first_name,
          last_name: r[i].from_last_name,
          phone: r[i].from_phone
        },
        body: r[i].body,
        sent_at: r[i].sent_at,
        read_at: r[i].read_at
      });
    }
    return messages;
  }
}

module.exports = User;
>>>>>>> 66d40bfa0edc0f1035f9f6a4c6a810d8733ae61b
