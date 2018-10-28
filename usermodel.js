//create a model
var mongoose=require('mongoose');


  var matches=mongoose.model('matches',{
     
      hteam:{type:String},
      ateam:{type:String},
      date:{type:String},
      location:{type:String},
      status:{type:String}
     // var users=mongoose.model('users',{
  //   name:{type:String,
  //     required:true,
  //     minlength:2,
  //     trim:true
  // },
  //   age:{type:Number},
  //   rollno:{type:Number},
  //   admno:{type:Number},
  //   college:{type:String}
  });

  var resources=mongoose.model('resources',{
     
    username:{type:String},
    password:{type:String},
    address:{type:String},
    mobile:{type:Number},
    type:{type:String}
  });
  // module.exports={
  //     users                       //users is given as properties.so whereever its import we should give in curly brackets
  // }
  var teams=mongoose.model('teams',{
     
    teamname:{type:String},
    location:{type:String},
    contact:{type:Number}
  });
  var tickets=mongoose.model('tickets',{
     
    username:{type:String},
    level:{type:String},
    noOfSeats:{type:Number},
    totalAmount:{type:Number},
    paymentStatus:{type:String}
  });

  module.exports={
    matches,
    resources,
    teams,
    tickets                                 //users is given as properties.so whereever its import we should give in curly brackets               
}