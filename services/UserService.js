const { User, Project, Role } = require("../models/index")
const { Op } = require("sequelize")
const bcrypt = require("bcryptjs")

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
      const options = { where: { id: { [Op.eq]: id } } }
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
      const salt = bcrypt.genSaltSync(12)
      password = bcrypt.hashSync(password, salt)
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

  /**
   * Update a user in the data store
   * @param {Number} id - user id PK
   * @param {Object} payload - object containing column names and values to be changed
   * @return {Boolean} true on success
   * @return {Promise} reject on fail
   */
  updateUser: async (id, payload) => {
    try {
      await User.sync()
      const user = await User.findByPk(id)
      for (let name in payload) {
        if (name === "password") {
          const salt = bcrypt.genSaltSync(12)
          payload[name] = bcrypt.hashSync(password, salt)
        }
        user[name] = payload[name]
        await user.save()
      }
      return true
    } catch (err) {
      return Promise.reject(err)
    }
  },

  /**
   * Update user role in the data store
   * @param {Number} id - user id PK
   * @param {Number} roleId - new roleId
   * @return {Boolean} true on success
   * @return {Promise} reject on fail
   */
  updateUserRole: async (id, roleId) => {
    try {
      await User.sync()
      await User.update(
        {
          roleId: roleId,
        },
        {
          where: {
            id: {
              [Op.eq]: id,
            },
          },
        }
      )
      return true
    } catch (err) {
      return Promise.reject(err)
    }
  },

  /**
   * Delete a user in the data store
   * @param {Number} id - userId PK
   * @return {Boolean} true on success
   * @return {Promise} reject on fail
   */
  deleteUser: async (id) => {
    try {
      await User.sync()
      await User.destroy({
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
}
