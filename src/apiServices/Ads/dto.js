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
    categories: resource.categories,
    url: resource.url,
    id: resource._id,
});

const multiple = (resources) => resources.map(resource => single(resource));

module.exports = {
    single,
    multiple,
}