const single = (resource) => ({
    name: resource.name,
    iShort: resource.iShort,
    type: resource.type,
    image: resource.image,
    video: resource.video, 
    status: resource.status,
    dateStart: resource.dateStart,
    dateEnd: resource.dateEnd,
    size: resource.size,
    section: resource.section,
    position: resource.position,
    url: resource.url,
});

const multiple = (resources) => resources.map(resource => single(resource));

module.exports = {
    single,
    multiple,
}