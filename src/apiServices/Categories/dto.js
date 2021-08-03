const single = (resource) => ({
    name: resource.name,
});

const multiple = (resource) => resource.map((resource) => single(resource));

module.exports = {
    single,
    multiple,
};