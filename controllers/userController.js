const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Get all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Sign up a new user
router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create(req.body);
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });