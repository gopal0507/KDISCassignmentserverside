const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/Matches',{ useNewUrlParser: true }); 
// mongoose.connect('mongodb://localhost:27017/Users',{ useNewUrlParser: true });
   //useNewUrl is used to avoid warning

module.exports={
    mongoose:mongoose
}