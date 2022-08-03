import express from 'express';
import { getPost } from '../controllers/posts.js';

// SET UP OUR ROUTER
const router = express.Router();

// HOMEPAGE
router.get('/', getPost);

export default router;
