const router = require('express').Router();
const { Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// Get all comments
router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [{ model: User, attributes: ['username'] }],
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get comments for a specific post
router.get('/post/:id', async (req, res) => {
    try {
      const commentData = await Comment.findAll({
        where: { post_id: req.params.id },
        include: [{ model: User, attributes: ['username'] }],
      });
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });