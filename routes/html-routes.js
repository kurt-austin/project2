// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      console.log("req.user1 "+ req.user)
      // res.redirect("/members");
      // res.redirect("/index");
       res.redirect("/beersearch");
    }
    res.render("signup")
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      console.log("req.user2 "+ req.user)
      // res.redirect("/members");
      // res.redirect("/index");
       res.redirect("/beersearch");
    }
    res.render("login")
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
<<<<<<< HEAD
  app.get("/members", isAuthenticated, function(req, res) {
    res.render("beersearch", {
      user: req.user
    })
=======
  // app.get("/members", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
    
  // });
  app.get("/beersearch", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/beersearch.html"));
>>>>>>> e1128595726cb1ea6c090ec5d9c3fe405ecf5e30
  });
};
