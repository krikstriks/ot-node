const Command = require('../command');
const semver = require('semver');

class OtnodeUpdateCommand extends Command {
    constructor(ctx) {
        super(ctx);
        this.logger = ctx.logger;
        this.autoUpdaterManager = ctx.autoUpdaterManager;
    }

    /**
     * Performs code update by fetching new code from github repo
     * @param command
     */
    async execute(command) {
        try {
            await this.autoUpdaterManager.executeUpdate();
        } catch (e) {
            this.logger.error(e);
            this.logger.emit({
                msg: 'Telemetry logging error at checking update command',
                Operation_name: 'Error',
                Event_name: 'CheckingUpdateError',
                Event_value1: e.message,
                Id_operation: 'Undefined',
            });
        }
        return Command.repeat();
    }

    /**
     * Builds default UpdateCommand
     * @param map
     * @returns {{add, data: *, delay: *, deadline: *}}
     */
    default(map) {
        const command = {
            name: 'otnodeUpdateCommand',
            delay: 0,
            data: {
                message: '',
            },
            period: 15 * 60 * 1000,
            transactional: false,
        };
        Object.assign(command, map);
        return command;
    }
}

module.exports = OtnodeUpdateCommand;
