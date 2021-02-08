# Config

All Advisor Portal Application will be making use of Cloud Foundry Config Server. The configs in this folder are configuration to the config server.

Each config file should be named as <strong><em>config-environment.json</em></strong>

For detail of each of the configuration item please refer to [Link](https://www.npmjs.com/package/cloud-foundry-config-client)

Config-local.json - This config is used during local development with "configLocation" set to local

Config-test.json - This config is used for Unit Test.

## Local Config

To use the configuration locally, you need to create a folder in your root director and name it the same name as the "configServerName" and the file itself will be "appName"-"profile".yml

Example SsrBoilerPlate-ConfigServer

<sup>Last Update May 24, 2019</sup>
