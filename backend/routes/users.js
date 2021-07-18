const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {  // users and then / find gets all users and returns promise after it finds we get all users and 
                                       // return the users we got from the database and if there is a error we retun error
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {  //we get post request we take the username and add to newUser
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
