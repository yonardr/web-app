const {Sequelize} = require("sequelize");
module.exports = {
    up: async ({ context: queryInterface }) => {
        await queryInterface.createTable('Users', {
            id: {
                type: 'SERIAL',
                primaryKey: true,
                allowNull: false,
            },
            balance: {
                type: 'INTEGER',
                allowNull: false,
                defaultValue: 10000,
            },
            createdAt: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });
        await queryInterface.bulkInsert('Users', [
            { balance: 10000, createdAt: new Date(), updatedAt: new Date() },
        ]);
    },
    down: async ({ context: queryInterface }) => {
        await queryInterface.dropTable('Users');
    },
};