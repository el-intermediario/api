const single = (resource, mpPublicKey) => ({
  id: resource._id,
  name: resource.name,
  image: resource.image,
  address: resource.address,
  methods: resource.methods,
  mpPublicKey
});

const singleTeaser = (resource) => ({
  id: resource._id,
  name: resource.name,
  logo: resource.logo,
  keyword: resource.keyword
});

const multiple = (resources) => resources.map(resource => singleTeaser(resource));

module.exports = {
  single,
  multiple
}