import express from 'express';

// Create global app object
const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});

export default app;
