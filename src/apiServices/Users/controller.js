const userDto = require('./dto');
const action = require('./actions');

// Get one user.
async function getUser(req, res) {
  const user = await action.getUser(req.params.id);
  return res.send(userDto.single(user));
}

// Get All users.
async function getUsers(req, res) {
  const page = parseInt((req.query.page || 0).toString(), 10);
  const limit = parseInt((req.query.limit || 10).toString(), 10);

  const users = await action.getUsers(page, limit);
  return res.send(userDto.multiple(users));
}

module.exports = {
  getUser,
  getUsers,
}
