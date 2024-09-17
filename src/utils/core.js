require('./modules')

const s = path.join(__dirname, '../../storage/database/sessions/sessions.json');
let sessions = {};

function loadSessions() {
  if (fs.existsSync(s)) {
    const data = fs.readFileSync(s);
    sessions = JSON.parse(data);
  }
}

function saveSessions() {
  fs.writeFileSync(s, JSON.stringify(sessions));
}

function setcookies(name, value, options = {}) {
  const { maxAge, path, domain, secure, httpOnly, sameSite } = options;
  let cookieStr = `${name}=${encodeURIComponent(value)}`;
  if (maxAge) cookieStr += `; Max-Age=${maxAge}`;
  if (path) cookieStr += `; Path=${path}`;
  if (domain) cookieStr += `; Domain=${domain}`;
  if (secure) cookieStr += `; Secure`;
  if (httpOnly) cookieStr += `; HttpOnly`;
  if (sameSite) cookieStr += `; SameSite=${sameSite}`;
  return cookieStr;
}

function clearcookies(name, options = {}) {
  return setcookies(name, '', { ...options, maxAge: 0 });
}

function createSession(email, data) {
  sessions[email] = data;
  saveSessions();
}

function getSession(email) {
  return sessions[email] || null;
}

function destroySession(email) {
  delete sessions[email];
  saveSessions();
}

function sessionMiddleware(req, res, next) {
  console.log('Session middleware called');
  const cookie = req.headers.cookie;
  if (!cookie) {
    req.session = null;
    return next();
  }

  const cookies = cookie.split(';').reduce((acc, c) => {
    const [key, value] = c.trim().split('=');
    acc[key] = decodeURIComponent(value);
    return acc;
  }, {});

  const sessionCookie = cookies['user'];
  if (sessionCookie) {
    try {
      const sessionData = JSON.parse(encrypt.base64_decode(sessionCookie));
      console.log('Session data:', sessionData);
      req.session = getSession(sessionData.email);
      console.log('Session:', req.session);
    } catch (e) {
      console.error('Error parsing session cookie:', e);
      req.session = null;
    }
  } else {
    req.session = null;
  }

  next();
}

module.exports = {
  setcookies,
  clearcookies,
  createSession,
  getSession,
  destroySession,
  loadSessions,
  sessionMiddleware
};

loadSessions();