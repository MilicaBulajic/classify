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

