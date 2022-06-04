const Fixture = require('./fixture');

async function getFixtures(req, res) {
  const fixture = await Fixture.findOne({}).sort({created: -1});
  res.send(fixture);
}

module.exports = {
  getFixtures
}  