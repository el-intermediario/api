const single = (resource) => ({
    name: resource.name,
    subject: resource.subject,
    message: resource.message,
    created: resource.created,
    updated: resource.updated,
});

const multiple = (resources) => resource.map((resource) => single(resource));

module.exports = {
    single,
    multiple,
};

