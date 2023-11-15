const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require('connect-flash');
const path = require("path");
const Course = require("./app/models/Course");
const Category = require("./app/models/category");
const paypal = require('paypal-rest-sdk')
const moment = require('moment');
const { paymentStatusConverString, listCityData, listDistrictData, listWardsData } = require("./config/enum.config");
const app = express();

const port = 3000;


const db = require("./config/db");

const bodyParser = require("body-parser");

const route = require("./routes");

db.connect();

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AcaaiFKiCiOAjy-DmKmedZ__kxw441NaAxAuQfiuxwPqLu5RlJwcoftq08UG3vLGW3Kn4Kxt7ndUxIfb',
  'client_secret': 'EHHP5m6sxBv6iWOrAdbNGOCMWpRZYFMqU7Ihdze_jgnY-ijF6zIG5kF5P3-wCwppLlHH8osggEc68zsO'
});

app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride("_method"));

// HTTP logger
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "ac@ncn12dn245cjhfn",
    cookie: { maxAge: 600000 },
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());
app.use((req,res,next)=>{
  const message = req.flash('message');
  const displayTime = 2000;
  if(message){
    res.locals.message= message
    
  }
  next();
})

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const formatNumber = (number) => {
  return number.toLocaleString('vi-VN'); // Việt Nam locale hoặc định dạng số theo yêu cầu của bạn
};

const formatDate = (date) =>{
  return moment(date).format('DD/MM/YYYY'); // Định dạng theo yêu cầu của bạn
};

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      or: (a, b, c) => a !== b || a !== c || b !== c,  
      sum: (a, b) => a + b,
      multiply:(a,b)=>a*b,
      equal: (a,b)=> a ==b,
      // isSelected: (a,b)=>{
      //   console.log(a,b);
      //   return a?.toString()==b?.toString()?"selected":""
      // },
      formatNumber: formatNumber,
      formatDate: formatDate,
      different :(a,b)=>a!=b,
      paymentStatusConverString: paymentStatusConverString,
      listCityData: listCityData(),
      listDistrictData: listDistrictData(),
      listWardsData: listWardsData(),
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));




app.use(bodyParser.json());
app.use((req,res,next)=>{
  if(req.session.user){
      req.user = req.session.user;
      res.locals.user = req.session.user;
  }
  if(req.session.staff){
    req.staff = req.session.staff;
    res.locals.staff = req.session.staff;
  }
  if(req.session.staffShip){
    req.staffShip = req.session.staffShip;
    res.locals.staffShip = req.session.staffShip;
  }
  
  next();
})

route(app);




app.get("/", async (req, res, next) => {
  const maleCategory = await Category.findOne({ category_name: "male" })
  const femaleCategory = await Category.findOne({ category_name: "female" })
  const coupleCategory = await Category.findOne({ category_name: "couple" })
  const array_male = await Course.find({categoryId: maleCategory._id}).sort({ createdAt: -1 }).limit(8).populate('categoryId').lean();
  const array_female = await Course.find({categoryId: femaleCategory._id}).sort({ createdAt: -1 }).limit(8).populate('categoryId').lean();
  const array_couple = await Course.find({categoryId:coupleCategory._id}).sort({ createdAt: -1 }).limit(4).populate('categoryId').lean();
  // console.log('res.locals',array_couple);

  return res.render("home", {
    male: array_male,
    femaleList: array_female,
    couplelist: array_couple,
  });

  // Course.find({}).limit(10)
  //   .then(courses => {
  //     courses = courses.map(Course => Course.toObject())
  //     res.render('home', {courses:array_male});
  //   })
  //   .catch(next);
  // res.render('home');
});

//tim kiem bang giong noi


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
