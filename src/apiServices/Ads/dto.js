const single = (resource) => ({
    name: resource.name,
    color: resource.color,
    type: resource.type,
    image: resource.image, 
    status: resource.status,
    dateStart: resource.dateStart,
    dateEnd: resource.dateEnd, 
    position: resource.position,
    section: resource.section,
});

const multiple = (resources) => resource.map(resource => single(resource));

module.exports = {
    single,
    multiple
}
