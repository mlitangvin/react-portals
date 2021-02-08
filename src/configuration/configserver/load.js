import { Config as ConfigServer } from 'cloud-foundry-config-client';

export default () => {
  return new Promise((resolve, reject) => {
    //Loading from Config Server
    ConfigServer.load(global.gConfigServer)
      .then(() => {
        resolve(ConfigServer.current);
      })
      .catch((err) => {
        console.error('***Unable to load config server settings***');
        console.error(err);
        reject(new Error('Config Server Error, refer to console'));
      });
  });
};
