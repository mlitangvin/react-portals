jest.mock('cloud-foundry-config-client', () => ({
  Config: {
    load: jest.fn(async param => {
      if (param.profile === 'error') {
        throw new Error('Throw an Exception');
      }
    }),
    current: 'Hello World'
  }
}));

describe('Test Config Server Loader', () => {
  it('should load successfully and return "Hello World"', async () => {
    global.gConfigServer = {
      appName: 'AVP-Rest-Boilerplate',
      configLocation: 'local',
      profile: 'test',
      configServerName: 'Boilerplate-configserver-dev',
      interval: 3600
    };
    const LoadConfig = require('../load');
    const result = await LoadConfig.default();
    expect(result).toBe('Hello World');
    delete global.gConfigServer;
  });

  it('should load with an error', async () => {
    global.gConfigServer = {
      appName: 'AVP-Rest-Boilerplate',
      configLocation: 'local',
      profile: 'error',
      configServerName: 'Boilerplate-configserver-dev',
      interval: 3600
    };
    expect.assertions(1);
    try {
      const LoadConfig = require('../load');
      const result = await LoadConfig.default();
      expect(result).toBe('Hello World');
      delete global.gConfigServer;
    } catch (err) {
      expect(err.message).toMatch('Config Server Error');
      delete global.gConfigServer;
    }
  });
});
