import express from 'express';
// import db from '../server/config';
import userRoutes from './routes/user';


// Create global app object
const app = express();

app.use('/api/v1', userRoutes);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 404,
    error: '404 Page Not Found',
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});

export default app;
