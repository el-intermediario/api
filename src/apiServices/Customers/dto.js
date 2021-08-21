const single = (resource) => ({
    userId: userId.resource,
    typeId: typeId.resource,
    numberId: numberId.resource,
    firstName: firstName.resource,
    lastName: lastName.resource,
});

const multiple = (resources) => resource.map((resource) => single(resource));

module.exports = {
    single,
    multiple
}