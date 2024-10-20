module.exports = async function () {
  app.post('/api/servers/create', async (req, res) => {
    try {
      
      const { ram, cpu, disk, node, softwarename, name, portc } = req.body
      const email = req.session?.user?.email;

      if (!email) {
        return res.status(401).send('User not logged in');
      }
      const nodes = await db.get('nodes') || [];
      const aaada = nodes.find(n => n.name === node);

      /*if (!aaada) {
        return res.status(404).send('Node not found');
      }*/

      let eggs = await db.get('softwares') || [];

      const software = eggs.find(s => s.name && s.name.toLowerCase() === softwarename.toLowerCase());
      /*if (!software) {
        return res.status(404).send('Software not found');
      }*/

      let users = await db.get('users') || {};
      const user = users[email];
  
      if (!user) {
        return res.status(404).send('User not found');
      }

      const serverId = makeuuid();
      const sftpId = makeuuid();
      const password = makeuuid();

      async function pe() {
        const servers = await db.get('servers') || [];
        let port = node.port;

        while (servers.some(server => server.port === port)) {
          port++;
        }

        return port;
      }

      const port = pe()

      console.log({
        image: Object.values(software.docker_images)[0],
        installImage: software.scripts.installation.container,
        env: software.variables.map(variable => `${variable.env_variable}=${variable.default_value}`).join(','),
        ram,
        cpu,
        disk,
        startup: software.startup,
        install: software.scripts.installation.script, 
        password,
        sftpId,
        port,
        serverId
      });
      /*
      const response = await fetch(`${aaada.nodeUrl}servers/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image: Object.values(software.docker_images)[0],
          installImage: software.scripts.installation.container,
        env: software.variables.map(variable => `${variable.env_variable}=${variable.default_value}`).join(','),
        ram,
        cpu,
        disk,
        startup: software.startup,
        install: software.scripts.installation.script, 
        password,
        sftpId,
        port: portc,
        serverId
        })
      });
      

      console.log(response)

      if (!response.ok) {
        throw new Error(`Failed to create server: ${response.message}`);
      }
*/
      const serverDetails = {
        name: name,
        sftpId: sftpId,
        port: port,
        ram,
        cpu,
        disk,
        softwarename,
        password: password,
        serverId: serverId
      };

      const servers = await db.get('servers') || [];
      servers.push(serverDetails);
      await db.set('servers', servers);

      if (!Array.isArray(user.servers)) {
        user.servers = [];
      }
      user.servers.push(serverId);

      users[email] = user;
      await db.set('users', users);

      res.send('success');
    } catch (err) {
      console.error('Error creating server:', err);
      res.status(500).send('Internal Server Error');
    }
  });
};
function makeuuid() {
  const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let b = '';
  for (let i = 0; i < 16; i++) {
    b += a.charAt(Math.floor(Math.random() * a.length));
  }
  return b;
}
