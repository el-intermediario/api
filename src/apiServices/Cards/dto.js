const single = (resource) => ({
    token: resource.token,
    customerId: resource.customerId,
    lastFour: resource.lastFour,
    lastSix: resource.lastSix,
    brand: resource.brand,
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
    single,
    multiple,
}