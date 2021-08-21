const single = (resource) => ({
  created: resource.created,
  featured: resource.featured,
  title: resource.title,
  layout: resource.layout,
  ids: resource.ids,
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
  single,
  multiple
};