const single = (resource) => ({
    type: resource.type,
    data: resource.data,
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
    single,
    multiple,
};