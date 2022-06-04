const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
require('dotenv').config();
const cron = require('node-cron');
const axios = require('axios');
const upload = require('./src/utils/cloudinaryMulter');
const cloudinary = require('./src/utils/cloudinary');

const routes = require('./src/routes');
const mongoose = require('mongoose');
const errorHandler = require('./src/utils/error-handler');
const cors = require('cors');
const Fixture = require('./src/apiServices/Fixtures/fixture');
const app = express();
// Bugsnag
const Bugsnag = require('@bugsnag/js');
const BugsnagPluginExpress = require('@bugsnag/plugin-express');
Bugsnag.start({
  apiKey: "c5ffac591efb8e596f2860b09fd81658",
  plugins: [BugsnagPluginExpress]
});
const middleware = Bugsnag.getPlugin('express');
app.use(middleware.requestHandler)

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.set('port', process.env.PORT || 8080);

// Connect Mongodb.
const connectDB = async () => {
  try {
    mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}${process.env.MONGO_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB connected!!');
  } catch (err) {
      console.log('Failed to connect to DB', err);
  }
};
connectDB();

// Methods.
app.get('/', (request, response) => {
  try {
    // response.set('Cache-Control', 'public, max-age=20, s-maxage=15')
    response.send(`Test server - ${parseInt(Date.now()/1000)}`);
  } catch (err) {
    throw new Error('Error at load server.');
  }
});

app.get('/privacy-policy', (request, response) => {
    //response.set('Cache-Control', 'public, max-age=6000, s-maxage=6000');
    response.send(`Politicas de privacidad.`);
});

app.use('/api/v1/upload-images', upload.array('image'), async (req, res) => {

  const uploader = async (path) => await cloudinary.uploads(path, req.body.folder);

  if (req.method === 'POST') {
    const urls = []
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path)
      urls.push(newPath)
      fs.unlinkSync(path)
    }

    res.status(200).json({
      message: 'Imagen cargada correctamente..',
      data: urls
    })

  } else {
    res.status(405).json({
      err: `${req.method} metodo no permitido`
    })
  }
});

// Routing.
app.use('/api/v1', routes);

// put the HTML file containing your form in a directory named "public" (relative to where this script is located)
app.use(express.static('public'));

// Bugsnag error hanleder.
app.use(middleware.errorHandler)
// app.use(errorHandler);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
});

cron.schedule(process.env.CRON_TIME_DAILY, async () => {
  // Get las 10 matchs and save in fixtures model.

  const last = await getFetchResults('last');
  const next = await getFetchResults('next');
  
  const fixture = {
    lastMatchs: last.results,
    nextMatchs: next.results,
    parameters: [last.parameters, next.parameters],
  };
  await Fixture.create(fixture);
});

async function getFetchResults(direction) {
  let config = {
    method: 'get',
    url: `https://v3.football.api-sports.io/fixtures?season=2022&league=128&${direction}=8`, // 128 , copaargentina 130  code=AR fixtures/events
    headers: {
      'x-rapidapi-key': process.env.SPORTS_API_KEY, // .env
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  };

  try {
    const response = await axios(config);
    if (response.data) {
      return {
        results: response.data.response,
        parameters: response.data.parameters
      }
    }
  } catch (error) {
    console.log(error);
  }
}