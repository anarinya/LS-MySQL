const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// setup environment variables
require('dotenv').config({ path: 'config.env' });

// setup database connection
const db = new Sequelize(process.env.DB_CONN);

// define DB models
const Flavor = db.define('flavor', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  inStock: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
});

// create express application
const app = express();

// setup middleware
app.use(bodyParser.json());

// setup routes
app.get('/', (req, res) => {
  res.send('Hello!');
});

app.get('/icecream', (req, res) => {
  db.sync()
    .then(() => Flavor.all()
      .then((flavors) => res.status(200).send(flavors))
      .catch((err) => res.status(400).send(err)))
    .catch(err => res.status(400).send('db sync error: ' + err));
});

app.get('/icecream/:id', (req, res) => {
  db.sync()
    .then(() => Flavor.findOne({ where: { id: req.params.id }}))
      .then(flavor => res.status(200).send(flavor))
      .catch(err => res.status(400).send(err))
    .catch(err => res.status(400).send('db sync error: ' + err))
});

app.delete('/icecream/:id', (req, res) => {
  db.sync()
    .then(() => Flavor.findOne({ where: { id: req.params.id }}))
      .then(flavor => {
        const { name } = flavor;
        flavor.destroy();
        res.send(`${name} has been removed.`);
      })
      .catch(err => res.status(400).send(err))
    .catch(err => res.status(400).send('db sync error: ' + err));
});

app.put('/icecream/:id', (req, res) => {
  db.sync()
    .then(() => Flavor.findOne({ where: { id: req.params.id }}))
      .then((flavor) => {
        flavor.update({ inStock: !flavor.inStock })
          .then(updatedFlavor => res.status(200).send(updatedFlavor))
          .catch(err => res.status(400).send(err))
      })
      .catch(err => res.status(400).send(err))
    .catch(err => res.status(400).send(err));
});

app.post('/icecream', (req, res) => {
  db.sync()
    .then(() => Flavor.findOrCreate({ where: { name: req.body.flavor }})
      .then((flavor) => res.status(200).send(flavor))
      .catch((err) => res.status(400).send(err)))
    .catch(err => res.status(400).send(err));
});

// Startup application
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server listening on port ${process.env.PORT}.`);
});