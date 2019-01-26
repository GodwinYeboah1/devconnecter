const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.port || 5000
const app = express()

const post =  require('./routes/api/post')
const profile =  require('./routes/api/profile')
const users =  require('./routes/api/users')

// DB Config
const db = require('./config/keys').mongoURI;
mongoose.connect(db,{ useNewUrlParser: true }).then(()=> console.log('MongoDB Connected')).catch(err=>console.log(err));

// Use Routes
app.use('/api/post', post);
app.use('/api/profile', profile);
app.use('/api/users', users);


app.listen(port, ()=> console.log(`server running on port ${port}`));

