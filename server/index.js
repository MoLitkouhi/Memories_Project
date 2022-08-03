// This is the new feature of importing modules in Node.js
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// IMPORTING ROUTES
import postRout from './routes/posts.js';

// CREATE WEB SERVER
const app = express();

// USING EXPRESS MIDDLEWARE TO CONNECT TO OUR APPLICATION:
app.use('/posts', postRout);

// SETING UP BODY-PARSER
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// SETING UP CORS
app.use(cors());

// CONNECT SERVER TO REAL db USING MONGOODB
// HTTPS://WWW.MONGODB.COM/CLOUD/ATLAS
const CONNECTION_URL =
  'mongodb+srv://Memories_Project:Memories_Project1362@cluster0.bgzzq.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

// USING MONGOOSE TO CONNECT TO DATABASE
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is listenning to the port ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
