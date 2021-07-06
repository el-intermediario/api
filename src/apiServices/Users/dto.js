const single = (resource) => ({
  id: resource._id,
  email: resource.email,
  role: resource.role
});

const multiple = (resources) => resources.map(resource => single(resource));

module.exports = {
  single,
  multiple
}