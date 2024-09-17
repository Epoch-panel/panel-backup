module.exports = async function () {

    app.post('/api/servers', async (req, res) => {
      try {
        const servers = await db.get('servers') || [];
        res.status(200).send(servers);
      } catch (err) {
        console.error('Error fetching servers:', err);
        res.status(500).send('Internal Server Error');
      }
    });
  
    app.post('/api/servers/user', async (req, res) => {
      try {
        const { email } = req.body;
  
        if (!email) {
          return res.status(400).send('Email is required');
        }
  
        const users = await db.get('users') || {};
        const user = users[email];
  
        if (!user) {
          return res.status(404).send('User not found');
        }
  
        const servers = await db.get('servers') || [];
        const userServers = servers.filter(server => user.servers.includes(server.serverId));
  
        res.status(200).send(userServers);
      } catch (err) {
        console.error('Error fetching user servers:', err);
        res.status(500).send('Internal Server Error');
      }
    });
    }