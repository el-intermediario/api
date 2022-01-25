const single = (resource) => ({
  id: resource._id,
  created: resource.created,
  title: resource.title,
  layout: resource.layout,
  status: resource.status,
  articlesOffset: resource.articlesOffset,
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
  single,
  multiple
};