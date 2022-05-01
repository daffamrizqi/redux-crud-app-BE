
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        name: DataTypes.STRING,
        gender: DataTypes.STRING,
        email: DataTypes.STRING,
        age: DataTypes.INTEGER
    })

    return User
}