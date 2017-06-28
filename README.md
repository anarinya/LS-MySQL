# LS-MySQL

## Topics

* Relational Databases
* sequelize
* MySQL
* SQL
* mysqld
* mysql>
* new Sequelize('connection string')
* sequelize.define('model_name', {});
* Sequelize.STRING & Sequelize.INTEGER
* Model.sync().then();
* Model.findAll().then();
* Model.build().save();
* Tables


## Assignment

Download MySQL.
Start MySQL server by running the command `mysqld`.
Type `mysql -u root` to access the MySQL command line tool as the root user.
Create a database called ice-cream: `create database icecream;`
Add a user that has access to this new database: `GRANT ALL PRIVILEGES ON icecream.* To 'USERNAME'@'localhost' IDENTIFIED BY 'PASSWORD';`
Create your express server.  Connect to the database with this connection string: `mysql://USERNAME:PASSWORD@localhost:3306/icecream`.

Build the following routes:
* [POST] `/icecream` This route should save a new ice cream flavor to the ice cream table.
* [GET] `/icecream` This route will return an array of all the different ice cream flavors.
* [GET] `/icecream/:id` This route will return the ice cream with the matching `id`.  The `id` is automatically generated.
* [DELETE] `/icecream/:id` This route should delete the specified ice cream.

## Extra Credit

Implement the following route:
* [PUT] `/icecream/:id` Add an `inStock` column in the ice cream table and toggle this column between `true` and `false`.
