const { User } = require('../models');

class UserService {
    static async updateUserBalance(userId, amount) {
        const user = await User.findByPk(userId);

        if (!user) {
            throw new Error('User not found');
        }

        const newBalance = user.balance + amount;

        if (newBalance < 0) {
            throw new Error('Insufficient funds');
        }

        user.balance = newBalance;
        await user.save();

        return user.balance;
    }
}

module.exports = UserService;