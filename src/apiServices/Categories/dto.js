const single = (resource) => ({
    name: resource.name,
    color: resource.color,
    politics: resource.politics,
    sport: resource.sport,
    economy: resource.economy,
    police: resource.police,
    society: resource.society,
    national: resource.national,
    province: resource.province,
    world: resource.world, 
});

const multiple = (resource) => resource.map((resource) => single(resource));

module.exports = {
    single,
    multiple,
};