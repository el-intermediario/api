const single = (resource) => ({
    title: resource.title,
    type: resource.type,
    created: resource.created,
    category: resource.category,
    
});

const multiple = (resources) => resource.map((resource) => single(resource));

module.exports = {
    single,
    multiple
};