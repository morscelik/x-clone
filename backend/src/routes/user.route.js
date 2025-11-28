import express from 'express';
import { followUser, getCurrentUser, getUserProfile, syncUser, updateProfile } from '../controllers/user.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public Routes
router.get("/profile/:username", getUserProfile)
// Protected Routes
router.post("/me", protectRoute, getCurrentUser)
router.post("/sync", protectRoute, syncUser)
router.put("/profile", protectRoute, updateProfile)
router.post("/follow/:targetUserId", protectRoute, followUser)

export default router;