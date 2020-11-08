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
}
