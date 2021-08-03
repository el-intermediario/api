const single = (resource) => ({
    name: resource.name,
    color: resource.color
});

const multiple = (resources) => resource.map(resource => single(resource));

module.exports = {
    single,
    multiple
}
