# classify

##  Project configuration 
1. Running the commands:

yarn init
yarn add express
yarn add dotenv
yarn add nodemon -D 

2. Adding the script below to start our server with nodemon (in "scripts" of package.json):
"dev": "nodemon -r dotenv/config app.js"

3. Created a .env file:

DB_HOST='127.0.0.1'
PORT='5433'
DB_USERNAME=sometext
DB_PASSWORD=sometext

4. Created a .gitignore:

/node_modules
.env

5. Created an app.js file in the root directory, and set up the Express server

6. Run yarn dev

7. Let’s install our remaining project dependencies:

yarn add pg pg-hstore --save // Installs Postgres
yarn add sequelize --save // Installs Sequelize
yarn add sequelize-cli -D // Install Sequelize CLI for command-line interface migrations and project bootstrapping.

8. Sequelize Project bootstrapping:
yarn sequelize-cli init
Rename the file to config.js
Add the dotenv requirement to the top of the file, and destructure your .env variable names from process.env

{
development: {
	username: DB_USERNAME,
	password: DB_PASSWORD,
	database: "database_development",
	host: DB_HOST,
	dialect: "postgres",
}

9. Create a new database in Postgres

First, update package.json and add in a db:create script:
"db:create": "sequelize-cli db:create"
Now we can run yarn db:create to create our new database.

10. Creating the first Model & Migration

$ yarn sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

11. Running (data) Migrations

First, let’s update package.json and add in a db:migrate & db:g:migration script:
"db:migrate": "sequelize-cli db:migrate",
"db:g:migration": "sequelize-cli migration:generate --name"

Now we can run yarn db:migrate and send over our Users model to Postgres

12. Creating Seeds

"db:g:seed": "sequelize-cli seed:generate --name"
"db:seeds": "sequelize-cli db:seed:all"

Next, run the yarn db:g:seed command, adding in the desired name of the seed file:

yarn db:g:seed sample-users


13. Running Seeds

yarn db:seeds

14. Define Routes

When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), we need to determine how the server will reponse by setting up the routes.

