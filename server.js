const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var MONGODB_URI =
process.env.MONGODB_URI || 'mongodb+srv://eric:password1234@cluster0.wbv1o.mongodb.net/workout?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

app.use(morgan('dev'));

app.use(require("./routues/api"));
app.use(require("./routues/views"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
  
});
