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

  // Create a new comment
router.post('/', withAuth, async (req, res) => {
    try {
      const commentData = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;