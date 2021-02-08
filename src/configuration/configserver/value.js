import { Config } from 'cloud-foundry-config-client';

/**
 * @typedef {Object} SampleObject
 * @property {string} firstname - The Client firstname
 * @property {string} lastname - The Client lastname
 *
 */
/**
 * @typedef {Object} AppConfig
 * @property {SampleObject} sampleObject - Sample Object
 * @property {string} variablename  - The variable name
 * @property {number} sessiontimeout - Session timeout in minute
 *  */

export default {
  /**
   * @type {AppConfig} Application Configuration
   */
  get Value() {
    return Config.current;
  }
};
