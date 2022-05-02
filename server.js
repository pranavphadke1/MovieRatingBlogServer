import mongoose from "mongoose";
import express from 'express';
import cors from 'cors'
import session from 'express-session';
const app = express();
import userController from "./controllers/user-controller.js";
import moviesController from "./controllers/movies-controller.js";
import authController from "./controllers/auth-controller.js";
import reviewsController from "./controllers/reviews-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
                          || 'mongodb://localhost:27017/MovieRatingBlogServer'
mongoose.connect('mongodb+srv://giuseppi:supersecretpassword@cluster0.7hth2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
app.use(cors({
                 credentials: true,
                 origin: 'http://localhost:3000'
             }));
app.use(session({
                    secret: 'SECRETO',
                    cookie: {secure: false}
                }));
app.use(express.json());

userController(app);
moviesController(app);
authController(app);
reviewsController(app)

app.get('/', (request, response) => {
    response.send("Welcome to MovieRatingBlogServer");
});

app.listen(process.env.PORT || 4000);