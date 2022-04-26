import express from 'express'
import cors from 'cors'
import userController   from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
                          || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json());
userController(app);
tuitsController(app);
app.get('/', (req, res) => {res.send('Welcome to Tuiter Server!')})
app.listen(process.env.PORT || 4000);