const ProjectService = require("../services/ProjectService")
const { validationResult } = require("express-validator")

module.exports = {
  /**
   * Handle route /projects/all GET
   * @param {Object} req - HTTP request object
   * @param {Object} res - HTTP response object
   * @param {Function} next - next middleware
   * @return {Object} res
   * @return {Function} next
   */
  allProjectsGET: async (req, res, next) => {
    try {
      const users = req.query.users
      const projects = await ProjectService.getAllProjects(users ? true : null)
      return res.status(200).json(projects)
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route for /projects/:id
   * @param {Object} req - HTTP request object
   * @param {Object} res - HTTP response object
   * @param {Function} next - next middleware
   * @return {Object} res
   * @return {Function} next
   */
  oneProjectGET: async (req, res, next) => {
    try {
      const id = req.params.id
      const users = req.query.users
      const project = await ProjectService.getOneProject(
        id,
        users ? true : null
      )
      return res.status(200).json(project)
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route for /projects/new
   * @param {Object} req - HTTP request object
   * @param {Object} res - HTTP response object
   * @param {Function} next - next middleware
   * @return {Object} res
   * @return {Function} next
   */
  projectAddPOST: async (req, res, next) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
      const { title, description, projectManager } = req.body
      const id = await ProjectService.addProject({
        title,
        description,
        projectManager,
      })
      return res.status(201).json(id)
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route for /projects/:id/users/add
   * @param {Object} req - HTTP request object
   * @param {Object} res - HTTP response object
   * @param {Function} next - next middleware
   * @return {Object} res
   * @return {Function} next
   */
  projectAddUserPOST: async (req, res, next) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
      const userId = req.body.userId
      const projectId = req.params.id
      await ProjectService.addUser(userId, projectId)
      return res.status(201).json(projectId)
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route for /projects/:id/update
   * @param {Object} req - HTTP request object
   * @param {Object} res - HTTP response object
   * @param {Function} next - next middleware
   * @return {Object} res
   * @return {Function} next
   */
  projectUpdatePUT: async (req, res, next) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
      const id = req.params.id
      await ProjectService.updateProject(id, req.body)
      return res.status(200).json(id)
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route for /projects/:projectId/users/:userId/remove
   * @param {Object} req - HTTP request object
   * @param {Object} res - HTTP response object
   * @param {Function} next - next middleware
   * @return {Object} res
   * @return {Function} next
   */
  projectRemoveUserDELETE: async (req, res, next) => {
    try {
      const { userId, projectId } = req.params
      await ProjectService.removeUser(userId, projectId)
      return res.status(204).end()
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route for /projects/:id/delete
   * @param {Object} req - HTTP request object
   * @param {Object} res - HTTP response object
   * @param {Function} next - next middleware
   * @return {Object} res
   * @return {Function} next
   */
  projectDeleteDELETE: async (req, res, next) => {
    try {
      const id = req.params.id
      await ProjectService.deleteProject(id)
      return res.status(204).end()
    } catch (err) {
      next(err)
    }
  },
}
