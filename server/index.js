const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose')
const config = require('./db')
const messageRoute = require('./router/message.router');
const authRouter = require('./router/auth.router');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/chat', messageRoute)
app.use('/auth', authRouter)
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});