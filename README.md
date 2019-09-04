# GameOfDrones

# Game Of Drones - Guillermo Banchero:

# FrontEnd - Angular: https://github.com/gbanchero12/GameOfDronesFrontEnd  
# BackEnd - NodeJs: https://github.com/gbanchero12/GameOfDrones

# BackEnd:

Install dependencies: npm install

Build: npm run build

Start application: npm start

EndPoints: 

GET http://localhost:3000/gamble/:id/:id

GET http://http://localhost:3000/statistics

MySQL:

Run the following script from the MySqlAdmin before run the app:

CREATE DATABASE NODE_DB;

USE NODE_DB;

CREATE TABLE table_statistics (
	ID INT(10) PRIMARY KEY,
	PLAYER VARCHAR(30),
	SCORE INT(10)
);

# FrontEnd:

Run ‘ng serve’ from the command line:

url: http://localhost:4200

Run in google chrome, previously deactivating CORS: https://alfilatov.com/posts/run-chrome-without-cors/



