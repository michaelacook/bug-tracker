const { Project, User, ProjectUser } = require("../models/index")
const { Op } = require("sequelize")

module.exports = {
  /**
   * Get all projects
   * @param {Boolean} users - false by default, true if project users should be included
   * @return {Object} projects on success
   * @return {Promise} reject on fail
   */
  getAllProjects: async (users = false) => {
    try {
      await Project.sync()
      const options = {}
      if (users)
        options.include = [
          {
            model: User,
            required: false,
            attributes: ["id", "firstName", "lastName", "email", "roleId"],
            through: { attributes: [] },
          },
        ]
      const projects = await Project.findAll(options)
      return projects
    } catch (err) {
      return Promise.reject(err)
    }
  },

  /**
   * Get a single project by primary key
   * @param {Number} id - projectId PK
   * @param {Boolean} users - false by default, true if including project users
   * @return {Object} project on success
   * @return {Promise} reject on fail
   */
  getOneProject: async (id, users = false) => {
    try {
      await Project.sync()
      const options = { where: { id: { [Op.eq]: id } } }
      if (users)
        options.include = [
          {
            model: User,
            required: false,
            attributes: ["id", "firstName", "lastName", "email", "roleId"],
            through: { attributes: [] },
          },
        ]
      const project = await Project.findOne(options)
      return project
    } catch (err) {
      return Promise.reject(err)
    }
  },

  /**
   * Add a new project
   * @param {Object} destructured
   * @return {Number} project.id - PK for newly created project
   * @return {Promise} reject on fail
   */
  addProject: async ({ title, description, projectManager }) => {
    try {
      await Project.sync()
      const project = await Project.create({
        title,
        description,
        projectManager,
      })
      return project.id
    } catch (err) {
      return Promise.reject(err)
    }
  },

  /**
   * Update a project in the data store
   * @param {Number} id - projectId PK
   * @param {Object} payload - names and values to be updated
   * @return {Boolean} true on success
   * @return {Promise} reject on fail
   */
  updateProject: async (id, payload) => {
    try {
      await Project.sync()
      const project = await Project.findByPk(id)
      for (let name in payload) {
        project[name] = payload[name]
        await project.save()
      }
      return true
    } catch (err) {
      return Promise.reject(err)
    }
  },

  /**
   * Delete a project in the data store
   * @param {Number} id - projectId PK
   * @return {Boolean} true on success
   * @return {Promise} reject on fail
   */
  deleteProject: async (id) => {
    try {
      await Project.sync()
      await Project.destroy({
        where: {
          id: {
            [Op.eq]: id,
          },
        },
      })
      return true
    } catch (err) {
      return Promise.reject(err)
    }
  },

  /**
   * Add a user to a project through the ProjectUser junction table
   * @param {Number} userId - user id PK
   * @param {Number} projectId - project id PK
   * @return {Boolean} true on success
   * @return {Promise} reject on fail
   */
  addUser: async (userId, projectId) => {
    try {
      await ProjectUser.sync()
      await ProjectUser.create({
        projectId,
        userId,
      })
      return true
    } catch (err) {
      Promise.reject(err)
    }
  },

  /**
   * Remove a user from a project through the ProjectUser junction table
   * @param {Number} projectId - project id PK
   * @return {Boolean} true on success
   * @return {Promise} reject on fail
   */
  removeUser: async (userId, projectId) => {
    try {
      await ProjectUser.sync()
      await ProjectUser.destroy({
        where: {
          [Op.and]: {
            projectId: {
              [Op.eq]: projectId,
            },
            userId: {
              [Op.eq]: userId,
            },
          },
        },
      })
      return true
    } catch (err) {
      Promise.reject(err)
    }
  },
}
