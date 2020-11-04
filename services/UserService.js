const { User, Project } = require("../models/index")
const { Op } = require("sequelize")

module.exports = {
  /**
   * Retrieve all users except the root user
   * @param {Boolean} projects - default false, eager load associated projects on true
   */
  getAllUsers: async (projects = false) => {
    try {
      await User.sync()
      const users = await User.findAll({
        where: {
          id: {
            [Op.gt]: 1,
          },
        },
        include: projects ? Project : null
      })
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
  getOneUser: async (id, projects = false) => {
    try {
      await User.sync()
      const user = await User.findOne({
        where: {
          id: {
            [Op.eq]: id
          }
        },
        include: projects ? Project : null
      })
      return user
    } catch (err) {
      return Promise.reject(err)
    }
  },

  /**
   * Add a user to the data store, default role is submitter
   * @param {Object} properties firstName:string, lastName:string, password:string, email:string
   * @return {Object} res.json
   */
  addUser: async ({ firstName, lastName, password, email }) => {
    try {
      await User.sync()
      const user = await User.create({
        firstName,
        lastName,
        password,
        email,
        roleId: 5
      })
      return res.status(201).json(user.id)
    } catch (err) {
      return Promise.reject(err)
    }
  },
}
