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
      const role = req.query.role
      const users = await UserService.getAllUsers(
        projects ? true : null,
        role ? true : null
      )
      return res.status(200).json(users)
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route /users/:id GET
   * Send associated projects for user when query param ?projects present
   * @param {Object} res
   * @param {Object} req
   * @param {Func} next
   * @return {Object} res.json
   */
  oneUserGet: async (req, res, next) => {
    try {
      const id = req.params.id
      const projects = req.query.projects
      const role = req.query.role
      const user = await UserService.getOneUser(
        projects ? true : null,
        role ? true : null
      )
      return res.status(200).json(user)
    } catch (err) {
      next(err)
    }
  },
}
