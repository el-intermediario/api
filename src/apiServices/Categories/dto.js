const single = (resource) => ({
    name: resource.name,
    color: resource.color,
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
    single,
    multiple,
};