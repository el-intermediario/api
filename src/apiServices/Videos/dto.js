const single = (resource) => ({
    title: resource.title,
    type: resource.type,
    created: resource.created,
    category: resource.category,
    
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
    single,
    multiple
};