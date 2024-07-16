const UserService = require('../services/userService');

class UserController {
    static async updateBalance(req, res) {
        const { userId } = req.params;
        const { amount } = req.body;

        try {
            const balance = await UserService.updateUserBalance(userId, amount);
            res.json({ balance });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = UserController;