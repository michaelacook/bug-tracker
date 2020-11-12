const {
  Issue,
  IssueHistory,
  Project,
  Priority,
  Comment,
} = require("../models/index")
const { Op } = require("sequelize")

module.exports = {
  /**
   * Get all issues regardless of project
   * @param {Boolean} comments default true, used to determine if comments should be included
   * @return {Object} issues
   * @return {Promise} reject on fail
   */
  getAllIssues: async (comments = true) => {
    try {
      await Issue.sync()
      const options = {}
      const include = []
      if (comments) include.push({ model: Comment, required: false })
      if (include.length) options.include = include
      const issues = await Issue.findAll(options)
      return issues
    } catch (err) {
      Promise.reject(err)
    }
  },

  /**
   * Get a single issue by id PK
   * @param {Number} id - issue PK
   * @param {Boolean} comments true by default, used to determine if comments should be included
   */
  getOneIssue: async (id, comments = true) => {
    try {
      await Issue.sync()
      const options = { where: { id: { [Op.eq]: id } } }
      const include = []
      if (comments) include.push({ model: Comment, required: false })
      if (include.length) options.include = include
      const issue = await Issue.findOne(id)
      return issue
    } catch (err) {
      Promise.reject(err)
    }
  },

  /**
   * Get all the issues for a project
   * @param {Number} projectId - project FK on the Issue table
   * @param {Boolean} comments true by default, used to determine if comments should be included
   * @return {Object} issues
   * @return {Promise} reject on fail
   */
  getIssuesByProject: async (projectId, comments = true) => {
    try {
      await Issue.sync()
      const options = { where: { projectId: { [Op.eq]: projectId } } }
      const include = []
      if (comments) include.push({ model: Comment, required: false })
      if (include.length) options.include = include
      const issues = await Issue.findAll(options)
      return issues
    } catch (err) {
      Promise.reject(err)
    }
  },

  /**
   * Add a new issue
   * @param {Object} destructured
   * @return {Number} newly created issue id
   * @return {Promise} reject on fail
   */
  addIssue: async ({ priorityId, projectId, title, description }) => {
    try {
      await Issue.sync()
      const issue = await Issue.create({
        priorityId,
        projectId,
        title,
        description,
      })
      return issue.id
    } catch (err) {
      Promise.reject(err)
    }
  },

  /**
   * Update an issue in the data store
   * Creates a new instance in IssueHistory to track changes
   * @param {Number} id - issueId PK
   * @param {Object} payload - names and values to be updated
   * @return {Boolean} true on success
   * @return {Promise} reject on fail
   */
  updateIssue: async (id, payload) => {
    try {
      await Issue.sync()
      for (let name in payload) {
        const issue = await Issue.findByPk(id)
        await IssueHistory.create({
          issueId: id,
          previousValue: issue[name],
          newValue: payload[name],
        })
        issue[name] = payload[name]
        await issue.save()
      }
      return true
    } catch (err) {
      Promise.reject(err)
    }
  },

  /**
   * Update issue priority
   * @param {Number} id - issue PK
   * @param {Number} newPriorityId - new priority
   * @return {Boolean} true
   * @return {Promise} reject on fail
   */
  updateIssuePriority: async (id, newPriorityId) => {
    try {
      await Issue.sync()
      const issue = await Issue.findByPk(id)
      issue["priorityId"] = newPriorityId
      await issue.save()
      return true
    } catch (err) {
      Promise.reject(err)
    }
  },

  /**
   * Delete an issue
   * @param {Number} id - issue PK
   * @return {Boolean} true
   * @return {Promise} reject on fail
   */
  deleteIssue: async (id) => {
    try {
      await Issue.sync()
      await Issue.destroy({
        where: {
          id: {
            [Op.eq]: id,
          },
        },
      })
      return true
    } catch (err) {
      Promise.reject(err)
    }
  },
}
