var express = require('express');
var router = express.Router();
var contactController = require('../controllers/contacts');

/**
 * This is a function for one use only, it's to create a user in the database when we hit this endpoint.
 */
router.get('/create_contact', function(req, res) {
  var newContact = new Contact({
    name: 'Joseph',
    lastName: 'Arrieta',
    gender: 'M',
    age: 26,
    phone: '0992807816',
  });

  newContact.save(function(err, newContact) {
    if (err) return console.error(err);
    console.dir(newContact);
  });
});

router.get('/', contactController.list);
router.get('/:id', contactController.load);

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function(e, docs) {
    res.render('users', {users: docs});
  })
})*/

module.exports = router;
