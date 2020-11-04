const UserService = require("../services/UserService")

module.exports = {
  /**
   * Handle route /users/all GET
   * Send associated projects for each user when query param ?projects present
   * @param {Object} req - HTTP request
   * @param {Object} res - HTTP response
   * @param {Func} next - next middleware function call
   * @return {Object} res.json
   */
  allUsersGET: async (req, res, next) => {
    try {
      const projects = req.query.projects
      const users = await UserService.getAllUsers(projects ? true : null)
      return res.status(200).json(users)
    } catch (err) {
      next(err)
    }
  },
}
