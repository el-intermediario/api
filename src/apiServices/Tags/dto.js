const single = (resource) => ({
    name: resource.name,
}); 

const multiple = (resources) => resource.map((resource) => single(resource));

module.exports = {
    single,
    multiple,
};
