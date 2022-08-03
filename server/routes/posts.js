import express from 'express';

// SET UP OUR ROUTER
const router = express.Router();

// HOMEPAGE
router.get('/', (req, res) => {
  res.send('That is our HomePage.');
});

export default router;
