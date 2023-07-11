const single = (resource) => ({
    title: resource.title,
    type: resource.type,
    created: resource.created,
    category: resource.category,
    content: resource.content,
    mimetype: resource.mimetype,
    thumbnail: resource.thumbnail,
    customThumbnail: resource.customThumbnail,
    customVideo: resource.customVideo,
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
    single,
    multiple
}