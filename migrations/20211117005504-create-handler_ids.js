module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('handler_ids', {
        handler_id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.STRING,
        },
        data: {
            allowNull: true,
            type: Sequelize.TEXT,
        },
        status: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        timestamp: {
            type: Sequelize.BIGINT,
        },
        created_at: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('NOW()'),
        },
        updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('NOW()'),
        },
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('handler_ids'),
};
