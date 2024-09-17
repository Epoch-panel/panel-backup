module.exports = async function () {
  const wss = new WebSocket.Server({ noServer: true });

  wss.on('connection', async (ws, req) => {

    const serverId = req.params.serverId;
    const nodes = await db.get('nodes');
    const servers = await db.get('servers') || {};

    const a = nodes[serverId];
    console.log(a)

    const wsa = new WebSocket(`ws://${a.url}/ws/${serverId}`, { headers: { 'authorization': 'epch' } });

    wsa.on('open', () => wsa.send(JSON.stringify({ action: 'start' })));
    wsa.on('message', (data) => wsa.send(data));
    wsa.on('close', () => wsa.close());
    wsa.on('error', (err) => {
      wsa.send(JSON.stringify({ error: err.message }));
      wsa.close(1011, 'Internal Server Error');
    });

    wsa.on('close', () => ws.close());
    wsa.on('error', () => ws.close());

    ws.on('message', async (message) => {
      let a;
      try {
        a = JSON.parse(message);
      } catch (error) {
        ws.send(JSON.stringify({ error: 'Invalid JSON' }));
        return;
      }

      switch (a.event) {
        case 'cmd':
          sendCommand(ws, serverId, a.command);
          break;
        default:
          ws.send(JSON.stringify({ error: 'Event 404' }));
          break;
      }
    });
  });

  function sendCommand(ws, serverId, command) {
    const cmd = command.split(' ');
    wsa.send(JSON.stringify({ action: 'exec', cmd, serverId }));
  }

  app.ws('/ws/:serverId', (ws, req) => {
    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), (ws) => {
      wss.emit('connection', ws, req);
    });
  });
};
