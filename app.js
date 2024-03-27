// Variable Declaration
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();
var passport = require("passport");
var LocalStrategy = require("passport-local");
var User = require("./models/user");
var methodOverride = require("method-override");

//Route Variable Declaration
var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var indexRoutes = require("./routes/index");

app.use(methodOverride("_method"));

seedDB = require("./seeds");

//seed Database
seedDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//Mongoose Database Congfiguration
// mongoose.connect(
// 	"mongodb+srv://sphoorthy:1234@cluster0-qrx3h.mongodb.net/test?retryWrites=true&w=majority",
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		useCreateIndex: true,
// 		useFindAndModify: false,
// 	}
// );

mongoose.connect(
	"mongodb://localhost/campsite_db_v16",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	}
);

//Passport Configuration
app.use(
	require("express-session")({
		secret: "AsktheSky!",
		resave: false,
		saveUninitialized: false,
	})
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Current User Deal
app.use(function (req, res, next) {
	res.locals.cuurentUser = req.user;
	next();
});

//Route Uses
app.use("/", indexRoutes);
app.use(commentRoutes);
app.use("/campgrounds", campgroundRoutes);

// Listening Function
// app.listen(process.env.PORT, function () {
// 	console.log("Campsite Camps Server has started");
// });

app.listen(3000, function () {
	console.log("Campsite Camps Server has started");
});
