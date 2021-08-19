const single = (resource) => ({
  id: resource._id,
  description: resource.description,
  dateEnd: resource.dateEnd,
  paymentId: resource.paymentId,
  name: resource.name,
});

const multiple = (resource) => resource.map((resource) => single(resource));

module.exports = {
  single,
  multiple,
};
