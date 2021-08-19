const single = (resource) => ({
    title: title.resource,
    type: type.resource,
    created: created.resource,
    category: category.resource,
    
});

const multiple = (resources) => resource.map((resource) => single(resource));

module.exports = {
    single,
    multiple
};