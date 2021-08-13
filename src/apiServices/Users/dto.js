const single = (resource) => ({
  id: resource._id,
  email: resource.email,
  role: resource.role,
  firstName: resource.firstName,
  lastName: resource.lastName,
});

const multiple = (resources) => resources.map(resource => single(resource));

module.exports = {
  single,
  multiple
}