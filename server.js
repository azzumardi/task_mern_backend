const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./connect/database');
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5001;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/api/tasks', (req, res) => {
//   //   res.send('Get all tasks');
//   res.status(200).json({ message: 'Get all tasks' });
// });

app.use('/api/tasks', require('./routes/taskRoutes'));

app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on ${port}`));
