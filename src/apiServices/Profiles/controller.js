const action = require('./actions');
const dto = require('./dto');
const Profile = require('./profile');

async function createProfile (req, res) {
  const { userId, firstName, lastName, phone, phoneArea, typeId, numberId, gender, birthday,  image, status } = req.body;
  try{
    const data = await new Profile({
      userId,
      firstName,
      lastName,
      phone,
      phoneArea,
      typeId,
      numberId,
      gender,
      birthday,
      image,
      status
    }).save();
    
    return res.send(data);
  }catch(err){
     return res.status(500).send({
      message: err.message
    })
  }   
};

// Get one profile.
async function getProfile (req, res) {
  // res.set('Cache-Control', 'public, max-age=300, s-maxage=300')
  const profile = await action.getProfile(req.params.id);
  return res.send(dto.single(profile));
}

async function getProfileByUserId(userId) {
  // res.set('Cache-Control', 'public, max-age=300, s-maxage=300')
  const profile = await action.getProfileByUserId(userId);
  return dto.single(profile);
}

module.exports = {
  createProfile,
  getProfile,
  getProfileByUserId,
}