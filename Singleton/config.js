// Use Cases

/*
1. Load the resources at the start of app from file or external resources
2. Establish Database connection only once
3. Cache AuthToken create token holder single class
*/

// Hidden constructor
// Public get instance method

const { error } = require("console");
const fs = require("fs");

class PrivateConfigManager {
  constructor() {
    this.configObj = {
      config: {},
    };
    this.loadConfig();
    // freezing object so this object can not be updated externally
    Object.freeze(this.configObj);
  }
  loadConfig() {
    try {
      const data = fs.readFileSync("./config.json", "utf8");
      this.configObj.config = JSON.parse(data);
    } catch (error) {
      console.log("error loading configuration");
    }
  }
  getConfig() {
    return this.configObj.config;
  }
}

// A singleton class
class AppConfig {
  constructor() {
    // restricting user to create new instance
    throw new error("Please use getInstance()");
  }

  static getInstance() {
    if (!AppConfig.instance) {
      AppConfig.instance = new PrivateConfigManager();
    }
    return AppConfig.instance;
  }
}

module.exports = AppConfig;
