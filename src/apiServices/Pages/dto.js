const single = (resource) => ({
  title: resource.title,
  id: resource._id,
  body: resource.body,
  bodyHtml: resource.bodyHtml,
  status: resource.status,
  slug: resource.slug,
  idShort: resource.idShort
});

const multiple = (resources) => resources.map(resource => single(resource));

module.exports = {
  single,
  multiple,
}