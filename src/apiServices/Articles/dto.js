const single = (resource) => ({
    id: resource._id,
    title: resource.title,
    body: resource.body,
    image: resource.image,
    copete: resource.copete,
    dropline: resource.dropline,
    status: resource.status,
    slug: resource.slug,
    created: resource.created,
    section: resource.section,
    source: resource.source,
    category: resource.category,
    categoryKey: resource.categoryKey,
    categoryParent: resource.categoryParent,
  });
  
  const multiple = (resources) => resources.map(resource => single(resource));
  
  module.exports = {
    single,
    multiple
  }