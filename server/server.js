// import usersRouter from 'routes/usersRoute.js';

// import router from './routes/usersRoute.js';
// import userRouter from './routes/usersRoute';
import userRouter from './routes/usersRoute.js'

import express from 'express';
import mongoose from 'mongoose';
// const userRouter = require("./routes/usersRoute")

// import getenv from './src/helper/getenv.js';

const app = express();

const PORT = 5000;
const MONGO_URI = "mongodb+srv://dbPAW:burungkecil123@cluster0.pvbdsir.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to Database!'))
  .catch((err) => {
    console.error(`Can't connect to Database!`);
    console.error(err);
    process.exit(1);
  });

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Express');
});

app.use('/laptop', userRouter);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));