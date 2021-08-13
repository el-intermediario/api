const single = (resource) => ({
    name: resource.name,
    color: resource.color,
    type: resource.type,
    image: resource.image, 
    status: resource.status,
});

const multiple = (resources) => resource.map(resource => single(resource));

module.exports = {
    single,
    multiple
}
