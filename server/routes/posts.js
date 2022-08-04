import express from 'express';
import { getPost, createPost } from '../controllers/posts.js';

// SET UP OUR ROUTER
const router = express.Router();

// HOMEPAGE
router.get('/', getPost);
router.post('/', createPost);

export default router;
