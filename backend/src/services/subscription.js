const { Op } = require('sequelize');
const { Subscription } = require('../models');

const PLANS = {
  '1m': { months: 1, amountToman: 1000000, title: 'یک ماهه' },
  '3m': { months: 3, amountToman: 2000000, title: 'سه ماهه' },
  '12m': { months: 12, amountToman: 8000000, title: 'یک ساله' },
};

const hasActiveSubscription = async (userId) => {
  if (!userId) return false;
  const s = await Subscription.findOne({
    where: { userId, status: 'approved', endsAt: { [Op.gt]: new Date() } },
  });
  return !!s;
};

const hadExpiredSubscription = async (userId) => {
  if (!userId) return false;
  const s = await Subscription.findOne({ where: { userId, status: 'approved' } });
  return !!s;
};

module.exports = { PLANS, hasActiveSubscription, hadExpiredSubscription };
