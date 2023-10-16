const mongoose = require("mongoose");
mongoose.connect(
  { useNewUrlParser: true, useUnifiedTopology: true} )
  .then((data)=>console.log('connected'))
  .catch((err)=> console.log(err));
