### Project description
- Project name: Blog platform
- Development time: 2021.10~2021.12
- development environment: Node, MongoDB, Bootstrap, vscode development tools
- Project Description: Built personal blog system, learned the front desk skillfully:
User home page, classification page and details page display, background: registered user management, blog classification management, blog content and comment management functions.
The project is divided into three parts, namely, the basic part of JavaScript, the improvement part and the actual part, the actual part, the database mainly uses MongDB.
- My responsibilities: Personal full stack development using Node

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
