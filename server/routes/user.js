import express from 'express';
import controllers from '../controllers';

const router = express.Router();

// INDEX - List all users in the db
router.get('/users',
  controllers.getAllUsers);

// SHOW - displays more information about a specific user
router.get('/user/:id',
  controllers.getSpecificUser);

export default router;
