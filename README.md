### Project description
- Project name: Blog platform
- Development time: 2021.10~2021.12
- development environment: Node, MongoDB, Bootstrap, vscode development tools
- Project Description: Built personal blog system, learned the frontend skillfully:
User home page, classification page and details page display, background: registered user management, blog classification management, blog content and comment management functions.
The project is divided into three parts, namely, the basic part of JavaScript, the improvement part and the actual part, the actual part, the database mainly uses MongDB.
- My responsibilities: Personal full stack development using Node

### Project Function
-Technical stack: Node (Express framework for back-end)+ bootstrap framework to write front-end style, nod module Mongoose to operate mongodb database 
-1 can register with the avatar (password encrypted storage), can log in 
-2. User information needs to be recorded during login. After successful login, user information (user name and profile picture) will be displayed on the blog page. 
-3 After login can publish a blog, can modify blog, can delete the blog, can comment blog 
-4 Can display the number of blog views You can only browse blogs without logging in

#### Three model classes:
- user. js: User information model class
-category.js: Category information model class (navigation bar information)
-content.js: Blog information model class
#### File Introduction
- app.js: entry file
- main.js: operation file on the front page of a blog post
- api.js: user operation interface file
- admin.js: the administrator manages operation files in the background
- user.js: enables users to operate background management files
#### ★ Note: if you do not want to operate the database, you can test the project /db/blog. SQL file into your computer's local database

### Project description
- Project name: Blog platform
## Project startup method:
- Download dependency: NPM install
- Create database: blog in mongo, import /db/blog.sql script file into database (Navicat visualization software can be used to simplify operation)
- Start project: NPM start or Nodemon or Node app.js
- Browser: http://localhost:8080
