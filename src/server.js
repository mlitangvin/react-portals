import loadConfig from './configuration/configserver/load';
//Adding config to global Variable
const environment = process.env.NODE_ENV || 'development';
//Config Server Configuration
const configServer = require('./config/config-' + environment);
global.gConfigServer = configServer;
//End Adding Config to global Variable

loadConfig()
  .then(() => {
    const app = require('./app');
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
      console.info(
        '\x1b[32m%s\x1b[0m %s \x1b[4m\x1b[33m%s\x1b[0m',
        'React Portals',
        'testing environment ready at',
        `http://localhost:${port}`
      );
    });
  })
  .catch((err) => {
    console.error(err);
  });
