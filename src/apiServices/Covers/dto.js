const single = (resource) => ({
  created: resource.created,
  featured: resource.featured,
  title: resource.title,
  layout: resource.layout,
  status: resource.status
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
  single,
  multiple
};