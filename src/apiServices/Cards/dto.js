const single = (resource) => ({
    token: token.resource,
    customerId: customerId.resource,
    lastFour: lastFour.resource,
    lastSix: lastSix.resource,
    brand: brand.resource,
});

const multiple = (resources) => resource.map((resource) => single(resource));

module.exports = {
    single,
    multiple,
}