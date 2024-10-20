/*require(path.join(__dirname, '../../src/utils/modules.js'));
const servers = db.get('users');

module.exports = (req) => 
    `   <div>
        <h1 class="text-white">vanakkam</h1>
      </div>
      <script>
        const servers = ${JSON.stringify(servers)};
        const session = ${JSON.stringify(req.session.user && req.session ? req.session : {})};  
        console.log(servers);
        console.log(session);
      </script>
    `;
*/
require(path.join(__dirname, '../../src/utils/modules.js'));

module.exports = (ctx, req, res) => {
    const servers = db.get('users');
    return `
      <div>
        <h1 class="text-white">vanakkam</h1>
      </div>
      <script>
        const servers = ${JSON.stringify(servers)};
        const session = ${JSON.stringify(req.session.user)};
        console.log(servers);
        console.log(session);
      </script>
    `;
};
