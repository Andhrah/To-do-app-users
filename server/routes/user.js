import express from 'express';
import controllers from '../controllers';

const router = express.Router();

// List all users in the db
router.get('/users',
  controllers.getAllUsers);

export default router;
