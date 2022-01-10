const BaseModuleManager = require('./base-module-manager');

class AutoUpdaterManager extends BaseModuleManager {
    getName() {
        return 'auto_updater';
    }

    executeUpdate() {
        this.implementation.executeUpdate();
    }
}

module.exports = AutoUpdaterManager;
