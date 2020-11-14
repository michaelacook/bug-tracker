const { Comment, Issue } = require("../models/index")
const { Op } = require("sequelize")

module.exports = {
  /**
   * Get all comments on an issue
   * @param {Number} issueId - id PK for issue
   * @return {Object} comments
   * @return {Promise} reject on fail
   */
  getCommentsByIssue: async (issueId) => {
    try {
      await Comment.sync()
      const comments = await Comment.findAll({
        where: {
          issueId: {
            [Op.eq]: issueId,
          },
        },
      })
      return comments
    } catch (err) {
      Promise.reject(err)
    }
  },

  /**
   * Get a single comment by PK
   * @param {Number} id - comment PK
   * @return {Object} comment
   * @return {Promise} reject on fail
   */
  getOneComment: async (id) => {
    try {
      await Comment.sync()
      const comment = await Comment.findByPk(id)
      return comment
    } catch (err) {
      Promise.reject(err)
    }
  },

  /**
   * Add a new comment
   * @param {Object} http payload destructured
   * @return {Boolean} true
   * @return {Promise} reject on fail
   */
  addComment: async ({ userId, targetUserId, issueId, body }) => {
    try {
      await Comment.sync()
      const comment = await Comment.create({
        userId,
        targetUserId,
        issueId,
        body,
      })
      return true
    } catch (err) {
      Promise.reject(err)
    }
  },

  /**
   * Update a comment
   * @param {Number} id - comment PK
   * @param {Object} http payload destructured
   * @return {Boolean} true
   * @return {Promise} reject on fail
   */
  updateComment: async (id, { body }) => {
    try {
      await Comment.sync()
      const comment = await Comment.findByPk(id)
      comment["body"] = body
      await comment.save()
      return true
    } catch (err) {
      Promise.reject(err)
    }
  },

  /**
   * Delete a comment
   * @param {Number} id - comment PK
   * @return {Boolean} true
   * @return {Promise} reject on fail
   */
  deleteComment: async (id) => {
    try {
      await Comment.sync()
      await Comment.destroy({
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
