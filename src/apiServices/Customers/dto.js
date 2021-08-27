const single = (resource) => ({
    userId: resource.userId,
    typeId: resource.typeId,
    numberId: resource.numberId,
    firstName: resource.firstName,
    lastName: resource.lastName,
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
    single,
    multiple,
}