module.exports = async function () {
  app.post('/api/softwares/add', async (req, res) => {
    try {
      if (!req.body || !req.body.name) {
        return res.status(400).send({ error: 'Software name is required' });
      }

      let softwares = await db.get('softwares');
      if (!Array.isArray(softwares)) {
        softwares = [];
      }

      softwares.push(req.body);
      await db.set('softwares', softwares);

      res.send({ message: 'Software added successfully' });
    } catch (err) {
      console.error('Error parsing JSON software:', err);
      res.status(500).send({ error: 'Internal Server Error' });
    }
  });
};
