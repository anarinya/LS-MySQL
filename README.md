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
Create a database called todos: `create database todos;`
Add a user that has access to this new database: `GRANT ALL PRIVILEGES ON todos.* To 'USERNAME'@'localhost' IDENTIFIED BY 'PASSWORD';`
Create your express server.  Connect to the database with this connection string: `mysql://USERNAME:PASSWORD@localhost:3306/todos`.

Build the following routes:
* [POST] `/todos` This route should save a new todo to the todos table.
* [GET] `/todos` This route will return an array of all todos.
* [GET] `/todos/:id` This route will return the todo with the matching `id`.  The `id` is automatically generated.
* [DELETE] `/todos/:id` This route should delete the specified todo.

## Extra Credit

Implement the following route:
* [PUT] `/todos/:id` Toggle the specified todo to either complete or incomplete.
