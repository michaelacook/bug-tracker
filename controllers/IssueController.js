const IssueService = require("../services/IssueService")

module.exports = {
  /**
   * Handle route for /issues/all GET
   * @param {Object} req - HTTP request object
   * @param {Object} res - HTTP response object
   * @return {String} res.json
   * @return {Func} next on error
   */
  allIssuesGET: async (req, res, next) => {
    try {
      const comments = req.query.comments
      const history = req.query.history
      const issues = await IssueService.getAllIssues(
        !comments ? null : false,
        history ? true : null
      )
      return res.status(200).json(issues)
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route for /issues/:id GET
   * @param {Object} req - HTTP request object
   * @param {Object} res - HTTP response object
   * @return {String} res.json
   * @return {Func} next on error
   */
  oneIssueGET: async (req, res, next) => {
    try {
      const id = req.params.id
      const comments = req.query.comments
      const history = req.query.history
      const issue = await IssueService.getOneIssue(
        id,
        !comments ? null : false,
        history ? true : null
      )
      return res.status(200).json(issue)
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route /issues/project/:id GET
   * @param {Object} req - HTTP request object
   * @param {Object} res - HTTP response object
   * @return {String} res.json
   * @return {Func} next on error
   */
  issueByProjectGET: async (req, res, next) => {
    try {
      const id = req.params.id
      const comments = req.query.comments
      const history = req.query.history
      const issue = await IssueService.getIssuesByProject(
        id,
        !comments ? null : false,
        history ? true : null
      )
      return res.status(200).json(issue)
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route /issues/new POST
   * @param {Object} res - HTTP response object
   * @param {Object} req
   * @return {String} res.json
   * @return {Func} next on error
   */
  issueAddPOST: async (req, res, next) => {
    try {
      const id = await IssueService.addIssue(req.body)
      return res.status(201).json(id)
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route /issues/:id/update PUT
   * @param {Object} res - HTTP response object
   * @param {Object} req
   * @return {String} res.json
   * @return {Func} next on error
   */
  issueUpdatePUT: async (req, res, next) => {
    try {
      const id = req.params.id
      await IssueService.updateIssue(id, req.body)
      return res.status(200).json(id)
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route /issues/:id/priority/update PUT
   * @param {Object} res - HTTP response object
   * @param {Object} req
   * @return {String} res.json
   * @return {Func} next on error
   */
  issueUpdatePriorityPUT: async (req, res, next) => {
    try {
      const id = req.params.id
      const newPriorityId = req.body.newPriorityId
      await IssueService.updateIssuePriority(id, newPriorityId)
      return res.status(200).json(id)
    } catch (err) {
      next(err)
    }
  },

  /**
   * Handle route /issues/:id/delete DELETE
   * @param {Object} res
   * @param {Object} req
   * @param {Func} next
   * @return {Object} res.status
   */
  issueDeleteDELETE: async (req, res, next) => {
    try {
      const id = req.params.id
      await IssueService.deleteIssue(id)
      return res.status(204).end()
    } catch (err) {
      next(err)
    }
  },
}
