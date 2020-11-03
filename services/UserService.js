const { User } = require("../models/index")
const { Op } = require("sequelize")

module.exports = {
  /**
   * Retrieve all users except the root user
   */
  getAllUsers: async () => {
    try {
      await User.sync()
      const users = await User.findAll({
        where: {
          id: {
            [Op.gt]: 1,
          },
        },
      })
      return users
    } catch (err) {
      return Promise.reject(err)
    }
  },
}
