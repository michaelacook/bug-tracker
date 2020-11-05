const UserService = require("../services/UserService")

module.exports = {
  /**
   * Handle route /users/all GET
   * Send associated projects for each user when query param ?projects present
   * Send user role when query param ?role present
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
   * Send user role when query param ?role present
   * @param {Object} res
   * @param {Object} req
   * @param {Func} next
   * @return {Object} res.json
   */
  oneUserGET: async (req, res, next) => {
    try {
      const id = req.params.id
      const projects = req.query.projects
      const role = req.query.role
      const user = await UserService.getOneUser(
        id,
        projects ? true : null,
        role ? true : null
      )
      return res.status(200).json(user)
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route /users/new
   * New user added to data store, send back 201 Created on success
   * @param {Object} res
   * @param {Object} req
   * @param {Func} next
   * @return {Object} res.json
   */
  userAddPOST: async (req, res, next) => {
    try {
      const { firstName, lastName, password, email } = req.body
      const id = await UserService.addUser({
        firstName,
        lastName,
        password,
        email,
      })
      return res.status(201).json(id)
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route /users/:id/update
   * @param {Object} res
   * @param {Object} req
   * @param {Func} next
   * @return {Object} res.json
   */
  userUpdatePUT: async (req, res, next) => {
    try {
      const id = req.params.id
      await UserService.updateUser(id, req.body)
      return res.status(200).json(id)
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route for /users/:id/role/update/:roleId
   * @param {Object} res
   * @param {Object} req
   * @param {Func} next
   * @return {Object} res.json
   */
  userUpdateRolePUT: async (req, res, next) => {
    try {
      const id = req.params.id
      const roleId = req.params.roleId
      await UserService.updateUserRole(id, roleId)
      return res.status(200).json(id)
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route for /users/:id/delete
   * @param {Object} res
   * @param {Object} req
   * @param {Func} next
   * @return {Object} res.status
   */
  userDeleteDELETE: async (req, res, next) => {
    try {
      const id = req.params.id
      await UserService.deleteUser(id)
      return res.status(204)
    } catch (err) {
      next(err)
    }
  },
}
