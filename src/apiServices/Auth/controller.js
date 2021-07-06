const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const axios = require('axios');
const userDto = require('../Users/dto');
const controllerProfiles = require('../Profiles/controller');
const controllerCards = require('../Cards/controller');

// Models.
const User = require('../Users/user');
const Profile = require('../Profiles/profile');

async function login(req, res, next) {
  const { email, password } = req.body;
  const user = await User.findOne({email});

  if (!user) {
    return res.status(400).json({ message: 'No existe usuario con ese email.' });
  }

  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    let userData = await userDto.single(user);
    // userData.cards = await controllerCards.getCardsByUserId(userData.id);
    userData.profile = await controllerProfiles.getProfileByUserId(userData.id);
    userData.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    };
    return res.json(userData);
  } else {
    return res.status(401).json({
      message: "Email o password incorrectos."
    });
  }
}

async function register(req, res) {
  const { firstName, lastName, dni, email, password } = req.body;
  // Check if user exist.
  const checkUser = await User.findOne({
    email
  });

  if (checkUser) {
    return res.status(400).json({ message: 'Ya estas registrado con este email, intenta ingresar.' });
  }

  try {
    const user = await new User({
      email,
      password
    }).save();

    const profile = await new Profile({
      userId: user._id,
      firstName,
      lastName,
      dni
    }).save();

    // Response for login.
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
    let userData = { ...user._doc };
    delete userData['password'];
    userData.cards = await Card.find({ userId: user._id });
    userData.profile = profile;
    userData.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    };
    return res.json(userData);
  } catch (err) {
    return res.status(500).send({
      message: err.message
    })
  }
}

async function accessSocial(req, res) {
  const { id, name, email, gender, birthday, token } = req.body;

  // Check Login to facebook.
  let checkSessionFacebook = null;
  try {
    checkSessionFacebook = await axios.get(`https://graph.facebook.com/me?access_token=${token}`);
  } catch (error) {
    res.json('Fallo el endpoint');
  }

  if (!checkSessionFacebook.data.id) {
    return res.json('No se pudo iniciar session.');
  }

  // Check if user exist.
  const user = await User.findOne({
    email
  });

  if (user) {
    const jwtoken = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    let userData = { ...user._doc };
    delete userData['password'];
    userData.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtoken}`
    };
    return res.json(userData);
  } else {
    // Generate new user.
    const user = await new User({
      email,
      password: token.substring(0, 8), // Save first 8 characters.
      role: 'customer'
    }).save();

    // Generate new profile.
    const names = name.split(' ');
    const profile = await new Profile({
      userId: user._id,
      firstName: names[0],
      lastName: names[names.length - 1],
      phone: '',
      phoneArea: '264',
      typeId: 'dni',
      numberId: '',
      gender: gender,
      birthday: birthday,
      image: `http://graph.facebook.com/${id}/picture?type=square`,
      status: true
    }).save();

    return res.json([user, profile]);
  }
}

module.exports = {
  login,
  register,
  accessSocial
}
