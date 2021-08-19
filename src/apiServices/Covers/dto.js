const single = (resource) => ({
    created: created.resource,
    featured: featured.resource,
    title: title.resource,
    content: content.resource,
    ids: ids.resource, 
});

const multiple = (resources) => resource.map((resource) => single(resource));

module.exports = {
    single,
    multiple
};