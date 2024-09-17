module.exports = async function () {
  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const users = (await db.get('users')) || {};
      const user = users[email];

      if (!user || !validate(password, user.hash)) {
        return res.status(401).send({ error: 'Invalid email or password' });
      }
      req.session.user = { email: user.email, username: user.username, permissions: 5 };
      console.log(req.session)

      res.send({ message: 'Login successful', user: { email: user.email, username: user.username } });
    } catch (err) {
      res.status(500).send({ error: 'Internal Server Error' });
    }
  });

  app.post('/register', async (req, res) => {
    try {
      const { email, password, username } = req.body;
      const users = (await db.get('users')) || {};
      const existingUser = users[email];
      const hash = encrypt.sha256(password);

      if (existingUser) {
        if (existingUser.hash === hash && existingUser.username === username) {
          req.session.user =  { email: existingUser.email, username: existingUser.username, permissions: existingUser.permissions || 5 };;

          return res.send({ message: 'Login successful', user: { email: existingUser.email, username: existingUser.username, permissions: existingUser.permissions || 1 } });
        } else {
          return res.status(400).send({ error: 'User already exists with different details' });
        }
      }

      users[email] = {
        email,
        hash,
        username,
        permissions: 5,
        serversc: 0,
        servers: {},
        resources: {
          ram: { value: 4096, unit: 'MB' },
          disk: { value: 4096, unit: 'GB' },
          cpu: { value: 100, unit: 'Cores' },
          servers: { value: 1, unit: 'Count' }
        }
      };

      await db.set('users', users);

      req.session.user = { email, username, permissions: 5 };

      res.send({ message: 'Registration successful', user: { email, username, permissions: 5 } });
    } catch (err) {
      res.status(500).send({ error: 'Internal Server Error' });
    }
  });

  app.post('/logout', (req, res) => {
    try {
      if (!req.session.user) {
        return res.status(400).send({ error: 'No session found' });
      }

      req.session.destroy(err => {
        if (err) {
          return res.status(500).send({ error: 'Failed to log out' });
        }

      res.send({ message: 'Logout successful' });
      })
    } catch (err) {
      res.status(500).send({ error: 'Internal Server Error' });
    }
  });
};

function validate(password, hash) {
  return encrypt.sha256(password) === hash;
}
