const awilix = require('awilix');

class DependencyInjection {
    static initialize() {
        const container = awilix.createContainer({
            injectionMode: awilix.InjectionMode.PROXY,
        });

        container.loadModules(['modules/controller/**/*.js', 'modules/service/**/*.js', 'modules/command/**/*.js', 'modules/manager/**/*.js'], {
            formatName: 'camelCase',
            resolverOptions: {
                lifetime: awilix.Lifetime.SINGLETON,
                register: awilix.asClass,
            },
        });

        return container;
    }

    static registerValue(container, valueName, value) {
        container.register({
            [valueName]: awilix.asValue(value),
        });
    }

    static registerModuleAsSingleton(container, dependencyClass, dependencyName) {
        container.register({
            [dependencyName]: awilix.asClass(dependencyClass).singleton(),
        });
    }
}

module.exports = DependencyInjection;
