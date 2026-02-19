const path = require('path');
const home = require(path.join(__dirname, '..', 'models', 'home'));

exports.gethome = (req, res) => {
  const registeredhomes = home.fetchAll();
  console.log(registeredhomes);
  res.render('home', { registeredhomes: registeredhomes, pagetitle: 'Home Page' });
};

exports.getcontact = (req, res) => {
  res.render('contact-us', { pagetitle: 'Contact Us' });
};

exports.postcontact = (req, res) => {
  res.render('contacted', { pagetitle: 'Thanks for Contacting US' });
};

exports.getbookings = (req, res) => {
  res.render('bookings', { pagetitle: 'Bookings' });
};