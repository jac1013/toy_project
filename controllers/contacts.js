var mongoose = require('mongoose');
var Contact = require('../models/contact');

exports.list = function(req, res) {
  Contact.find(function(err, contacts) {
    res.render('contacts/contacts', {contacts: contacts});
  });
}

exports.load = function(req, res, next) {

  Contact.findById(req.params.id, function(err, contact) {
    if(err) return console.error(err);
    if(!contact) return console.error('contact doesn\'t exist');
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(contact));
  })
}