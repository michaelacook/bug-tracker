const { User, Project, Role } = require("../models/index")
const { Op } = require("sequelize")

module.exports = {
  /**
   * Retrieve all users except the root user
   * @param {Boolean} projects - default false, eager load associated projects on true
   */
  getAllUsers: async (projects = false, role = false) => {
    try {
      await User.sync()
      const options = {
        where: {
          id: {
            [Op.gt]: 1,
          },
        },
      }
      const include = []
      if (projects)
        include.push({
          model: Project,
          required: false,
          attributes: ["id", "title"],
          through: { attributes: [] },
        })
      if (role)
        include.push({ model: Role, required: false, attributes: ["role"] })
      if (include.length) options.include = include
      const users = await User.findAll(options)
      return users
    } catch (err) {
      return Promise.reject(err)
    }
  },

  /**
   * Retrieve a single user by id
   * @param {Number} id - user PK
   * @param {Boolean} projects - default false, eager load associated projects on true
   */
  getOneUser: async (id, projects = false, role = false) => {
    try {
      await User.sync()
      const options = {}
      const include = []
      if (projects)
        include.push({
          model: Project,
          required: false,
          attributes: ["id", "title"],
          through: { attributes: [] },
        })
      if (role)
        include.push({ model: Role, required: false, attributes: ["role"] })
      if (include.length) options.include = include
      const user = await User.findOne(options)
      return user
    } catch (err) {
      return Promise.reject(err)
    }
  },

  /**
   * Add a user to the data store, default role is submitter
   * @param {Object} properties firstName:string, lastName:string, password:string, email:string
   * @return {Number} newly created user id
   */
  addUser: async ({ firstName, lastName, password, email }) => {
    try {
      await User.sync()
      const user = await User.create({
        firstName,
        lastName,
        password,
        email,
        roleId: 5,
      })
      return user.id
    } catch (err) {
      return Promise.reject(err)
    }
  },
}
