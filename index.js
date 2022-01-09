const express = require('express');
const os = require('os')
require('dotenv').config();
const routes = require('./src/routes');
const mongoose = require('mongoose');
const errorHandler = require('./src/utils/error-handler');
const cors = require('cors');
const app = express();
// Bugsnag
const Bugsnag = require('@bugsnag/js');
const BugsnagPluginExpress = require('@bugsnag/plugin-express');
Bugsnag.start({
  apiKey: process.env.BUGSNAG_API_KEY,
  plugins: [BugsnagPluginExpress]
});
const middleware = Bugsnag.getPlugin('express');
app.use(middleware.requestHandler)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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
    response.send(`Test server ${os.hostname()} - ${parseInt(Date.now()/1000)}`);
  } catch (err) {
    throw new Error('Error at load server.');
  }
});

app.get('/privacy-policy', (request, response) => {
    //response.set('Cache-Control', 'public, max-age=6000, s-maxage=6000');
    response.send(`Politicas de privacidad.`);
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
})

// module.exports.handler = serverless(app);
