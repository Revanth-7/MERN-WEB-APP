const router = require('express').Router();
let Exercise = require('../models/exercise.model');// model/schema is imported here from models folder

// exercises/
router.route('/').get((req, res) => {
  Exercise.find() //find request finds the objects in the DB and reponds with a promise and using then we respond the json objects
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});
// exercises/add
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
// we store all the data into variables and create a new object corresponding with the model and save it into the DB. 
  const newExercise = new Exercise({ 
    username,
    description,
    duration,
    date,
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
// exercises/2
router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id) // find by id takes parameter of id and finds the object. 
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});
// exercises/3
router.route('/:id').delete((req, res) => {

  Exercise.findByIdAndDelete(req.params.id)// find by id and delete takes parameter of id and deletes the object.
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
// exercises/update/3
router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);
        // we update the preexisting values with new values and store the same object through save method.
      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;