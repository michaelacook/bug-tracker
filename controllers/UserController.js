const UserService = require("../services/UserService")

module.exports = {
  /**
   * Handle route /users/all GET
   * @param {Object} req - HTTP request
   * @param {Object} res - HTTP response
   * @param {Func} next - next middleware function call
   * @return {Object} res.json
   */
  allUsersGET: async (req, res, next) => {
    try {
      const users = await UserService.getAllUsers()
      return res.status(200).json(users)
    } catch (err) {
      next(err)
    }
  },
}
