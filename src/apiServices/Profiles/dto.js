const single = (resource) => ({
  id: resource._id,
  userId: resource.userId,
  firstName: resource.firstName,
  lastName: resource.lastName,
  phone: resource.phone,
  phoneArea: resource.phoneArea,
  idType: resource.idType,
  idNumber: resource.idNumber,
  gender: resource.gender,
  birthday: resource.birthday,
  image: resource.image,
  status: resource.status
});

const multiple = (resources) => resources.map(resource => single(resource));

module.exports = {
  single,
  multiple
}