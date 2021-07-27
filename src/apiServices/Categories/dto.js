const single = (resource) => ({
    name: resource.name,
    color: resource.color,
});

const multiple = (resource) => resource.map((resource) => single(resource));

module.exports = {
    single,
    multiple,
};