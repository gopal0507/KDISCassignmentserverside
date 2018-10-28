




//...................
//express to mongodb
//..............................



//FOR API
const express=require('express');
var mongoose=require('./mongoose_db');
var ObjectId = require('mongodb').ObjectID;
var {matches}=require('./usermodel');
var {resources}=require('./usermodel');
var {teams}=require('./usermodel');
var {tickets}=require('./usermodel');
var bodyParser=require('body-parser');

var app=express();
app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200' );

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
//routing

//find specific users
// app.get('/getusers/:name',(req,res)=>{
//     var Name=req.params.name;
//      users.find({name:Name}).then((data)=>{
//         res.send(data);
//      }).catch((error)=>{                       //error handling catch is used
//          res.send(error);
//      })
// })



// all users
// app.get('/getusers',(req,res)=>{
//     users.find().then((data)=>{
//         res.send(data);
//     },(error)=>{
//         res.status(400).send(error)
//     })
// });
// all matches
app.get('/getmatches',(req,res)=>{
    matches.find({status:"True"}).then((data)=>{
        res.send(data);
    },(error)=>{
        res.status(400).send(error)
    })
});
app.get('/getteams',(req,res)=>{
    teams.find().then((data)=>{
        res.send(data);
    },(error)=>{
        res.status(400).send(error)
    })
});

app.get('/getregisteredusers',(req,res)=>{
    resources.find().then((data)=>{
        res.send(data);
    },(error)=>{
        res.status(400).send(error)
    })
});

app.put('/updatematches',(req,res)=>{
    var Id= req.body._id;
//   var Id=new ObjectID(req.body._id).toHexString();
//  var Id=new ObjectID(req.params.id).toHexString();
    // var Away=req.params.away;
    matches.findById({_id:ObjectId(Id)}).then((data)=>{
        data.hteam=req.body.hteam;
        data.ateam=req.body.ateam;
        data.date=req.body.date;
        data.location=req.body.location;
        data.status=req.body.status;
        console.log(data.hteam);

        data.save().then((datas)=>{
            //    res.send(data);
            console.log('Successfully saved',datas)      // mongo gives a response after writing into it
            },
            (error)=>{
            console.log('Error',error);
        });
    })
        
    });
//user entry
app.post('/matchesentry',(req,res)=>{

   // console.log(req.body);
     //passing a value to the model

// var Users=new users(
//     {
//         name:req.body.name,
//         age:req.body.age,
//         rollno:req.body.rollno,               //req.body.rollno....rollno is the name given within the postman or post request
//         admno:req.body.admno,                 //this value is given to the model variable
//         college:req.body.college
//     }
//    );

//    Users.save().then((data)=>{
//        res.send(data);
//     //console.log('Successfully saved',data)      // mongo gives a response after writing into it
//     },
//     (error)=>{
//     console.log('Error',error);
// });

   var Matches=new matches();
   Matches.ateam=req.body.ateam;
   Matches.hteam=req.body.hteam;
   Matches.date=req.body.date;
   Matches.location=req.body.location;
   Matches.status="True";
//console.log(req.body.ateam);

// var Matches=new matches(
//     {
//       hteam:req.body.hteam,
//       ateam:req.body.ateam,
//       date:req.body.date,
//       location:req.body.location
        
//     }
//    );

  

   Matches.save().then((data)=>{
      res.send(data);
    console.log('Successfully saved',data)      // mongo gives a response after writing into it
    },
    (error)=>{
    console.log('Error',error);
});

})
app.post('/registerusers',(req,res)=>{
    var Resources=new resources();
    Resources.username=req.body.username;
    Resources.password=req.body.password;
    Resources.address=req.body.address;
    Resources.mobile=req.body.mobile;
    Resources.type=req.body.type;
    Resources.save().then((data)=>{
        res.send(data);
      console.log('Successfully saved',data)      // mongo gives a response after writing into it
      },
      (error)=>{
      console.log('Error',error);
  });
  
  })
  app.post('/ticketusers',(req,res)=>{
    var Tickets=new tickets();
    Tickets.username=req.body.username;
    Tickets.level=req.body.level;
    Tickets.noOfSeats=req.body.noOfSeats;
    Tickets.totalAmount=req.body.totalAmount;
    Tickets.paymentStatus=req.body.paymentStatus
    Tickets.save().then((data)=>{
        res.send(data);
      console.log('Successfully saved',data)      // mongo gives a response after writing into it
      },
      (error)=>{
      console.log('Error',error);
  });
  
  })
  app.post('/registerteams',(req,res)=>{
    var Teams=new teams();
    Teams.teamname=req.body.teamname;
    Teams.location=req.body.location;
    Teams.contact=req.body.contact;
    Teams.save().then((data)=>{
        res.send(data);
      console.log('Successfully saved',data)      // mongo gives a response after writing into it
      },
      (error)=>{
      console.log('Error',error);
  });
  
  })
app.put('/deletematches',(req,res)=>{
      
    var Id= req.body._id;
      
    matches.findById({_id:ObjectId(Id)}).then((data)=>{
        data.status="False";
        data.save().then((datas)=>{
             res.send(datas);
            console.log('Successfully saved',datas)      // mongo gives a response after writing into it
            },
            (error)=>{
            console.log('Error',error);
        });
    })
})


//to write into db


app.listen(3000,()=>{
    console.log('Started')
})