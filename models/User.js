const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {
    validatePassword(password) {
      return bcrypt.compare(password, this.password);
    }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notNull: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
        notNull: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

User.addHook('beforeCreate', async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
  return user;
});

module.exports = User;