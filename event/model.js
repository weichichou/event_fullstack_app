const Sequelize = require('sequelize')
const db = require('../db') 

const Event = db.define(
    'event',
    {
        // all CAPS: tells other developers that this is a constant.
        // the valude inside it will never change.
        // Like the event type in Redux.
      name: Sequelize.STRING,
      date: Sequelize.STRING,
      description: Sequelize.STRING,
    }
  )

module.exports = Event

