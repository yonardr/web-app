const { sequelize } = require('./models');
const { Umzug, SequelizeStorage } = require('umzug');

const umzug = new Umzug({
    migrations: { glob: 'migrations/*.js' },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
});

(async () => {
    await umzug.up();
    console.log('Migrations completed');
})();