const express = require('express');
const { sequelize } = require('./models');
const UserController = require('./controllers/userController');
const validationMiddleware = require('./middlewares/validationMiddleware');

const app = express();
app.use(express.json());

app.put('/user/:userId/balance', validationMiddleware, UserController.updateBalance);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await sequelize.authenticate();
    console.log('Database connected');
});