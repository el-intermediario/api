const single = (resource) => ({
    id: resource._id,
    title: resource.title,
    body: resource.body,
    copete: resource.copete,
    dropline: resource.dropline,
    status: resource.status,
    slug: resource.slug
  });
  
  const multiple = (resources) => resources.map(resource => single(resource));
  
  module.exports = {
    single,
    multiple
  }