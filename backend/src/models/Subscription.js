const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Subscription = sequelize.define('Subscription', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  userId: { type: DataTypes.UUID, allowNull: false, references: { model: 'users', key: 'id' } },
  plan: { type: DataTypes.ENUM('1m', '3m', '12m'), allowNull: false },
  amountToman: { type: DataTypes.INTEGER, allowNull: false },
  trackingCode: { type: DataTypes.STRING(50), allowNull: false },
  status: { type: DataTypes.ENUM('pending', 'approved', 'rejected'), defaultValue: 'pending' },
  startsAt: { type: DataTypes.DATE },
  endsAt: { type: DataTypes.DATE },
}, { tableName: 'subscriptions', timestamps: true });

module.exports = Subscription;
