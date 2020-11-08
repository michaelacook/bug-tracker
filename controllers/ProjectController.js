const ProjectService = require("../services/ProjectService")

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
}
