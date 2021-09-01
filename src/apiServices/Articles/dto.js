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
    tags: resource.tags,
    count: resource.count,
  });

  const multiple = (resources) => resources.map(resource => single(resource));

  const teaser = (resource) => ({
    id: resource._id,
    title: resource.title,
    image: resource.image,
    copete: resource.copete,
    dropline: resource.dropline,
    slug: resource.slug,
    created: resource.created,
  });
  
  const multipleTeaser = (resources) => resources.map(resource => teaser(resource));
  
  module.exports = {
    single,
    teaser,
    multiple,
    multipleTeaser
  }