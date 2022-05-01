const {Sequelize, DataTypes} = require('sequelize')
const dbConfig = require('../config/dbConfig.js')

// sequelize: instance of Sequelize : represent connection to DB
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    timezone: "+07:00",

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

// testing connection
sequelize.authenticate()
.then(() => console.log(`CONNECTION SUCCESSFULL. . .`))
.catch(err => console.log(`ERROR: ${err}`))

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

// all models
db.User = require('./userModel')(sequelize, DataTypes)


// sync all models at once
db.sequelize.sync({force: false})
.then(() => console.log(`Re-sync done!`))


module.exports = db