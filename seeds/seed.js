const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const PostData = require('./PostData.json');
const CommentData = require('./CommentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // for (const Post of PostData) {
  //   await Post.create({
  //     ...Post,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  // for (const Comment of CommentData) {
  //   await Comment.create({
  //     ...Comment,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
