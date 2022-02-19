const express = require('express');
const mongoose = require('mongoose');

const app = express();
//connect port 3002 because 3001 broken on my computer for some reason.
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

//connect to mongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/18-NoSQL-Social-Network-API', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));