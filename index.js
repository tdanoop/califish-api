import express from 'express';
import cors from 'cors';
import AppRouter from './routes/appRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;
let corsConfig = {};
const onProduction = process.env.NODE_ENV === 'production';



if (onProduction) {
    corsConfig = {
      origin: function (origin, callback) {
        const allowedOrigins = ['http://www.califish.in', 'https://www.califish'];
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
          let msg =
            'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
          return callback(new Error(msg), false);
        }
        return callback(null, true);
      },
    };
  }

//mongoose connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/califishdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

//bodyParser setup

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//routes(app);

app.use(AppRouter);

//serving static file
app.use(express.static('public'));

app.use(cors(corsConfig));

app.get('/', (req, res) =>
    res.send(`Node and Express server running on port ${PORT}`)
)

app.listen(PORT, () =>
    console.log(`Your serveris running on port ${PORT}`)
)