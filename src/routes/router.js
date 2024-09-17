require('../utils/modules.js')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const session = require('express-session')
const { renderViews, renderPage } = require('../modules/synapse');

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

(async () => {
  async function load(a) {
    const f = fs.readdirSync(a);

    for (const b of f) {
      const c = path.join(a, b);
      const d = fs.statSync(c);
      if (d.isDirectory()) {
        await load(c);
      } else if (b.endsWith('.js')) {
        const e = require(c);
        if (typeof e === 'function') {
          await e();
        }
      }
    }
  }
  await load(__dirname);
})();

renderViews(app);

app.static('/assets', path.join(__dirname, '..', '..', 'public'));

app.post('/check-session', (req, res) => {
  if (req.session && req.session.user) {
    res.send({ loggedIn: true, email: req.session.user.email });
  } else {
    res.send({ loggedIn: false });
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SECRET, 
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 } 
}));