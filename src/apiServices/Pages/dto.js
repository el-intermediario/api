const single = (resource) => ({
    title: resource.title, 
    body: resource.body,
    created: resource.created,
    status: resource.status
});

const multiple = (resources) => resources.map(resource => single(resource));

module.exports = {
    single,
    multiple,
}