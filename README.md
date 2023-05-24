# social-network-API


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![node.js](https://img.shields.io/badge/node.js-v14.17.0-green)](https://nodejs.org/en)
[![Express.js](https://img.shields.io/badge/Express.js-v4.17.1-blue)](https://expressjs.com/)
[![dotenv](https://img.shields.io/badge/dotenv-v10.0.0-orange)](https://www.npmjs.com/package/dotenv)
[![nodemon](https://img.shields.io/badge/nodemon-v2.0.14-lightgrey)](https://www.npmjs.com/package/nodemon)
[![Mongoose](https://img.shields.io/badge/Mongoose-v5.13.3-yellowgreen)](https://mongoosejs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v4.4.6-brightgreen)](https://www.mongodb.com/)
[![Git](https://img.shields.io/badge/Git-v2.32.0-red)](https://git-scm.com/)


---

## Technology Used 🖥️

| Technology Used | Resource URL |
|-----------------|--------------|
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| node.js | [https://nodejs.org/en](https://nodejs.org/en) |
| Express.js | [https://expressjs.com/](https://expressjs.com/) |
| dotenv | [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv) |
| nodemon | [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon) |
| Mongoose | [https://mongoosejs.com/](https://mongoosejs.com/) |
| MongoDB | [https://www.mongodb.com/](https://www.mongodb.com/) |
| Git | [https://git-scm.com/](https://git-scm.com/) |

---

## Description 📝

This is a backend API for a social network application. It uses MongoDB as a database and Mongoose as an ODM. It allows users to create, update, and delete users, thoughts, and reactions to thoughts. It also allows users to add friends to their friends list and remove them from their friends list.

![example.gif](./assets/media/Routes.gif)

---

## Table of Contents 📋
* [Learning Points](#learning-points-✍️)
* [Installation Instructions](#installation-instructions-📥)
* [Usage Information](#usage-information-✅)
* [Contribution Guidelines](#contribution-guidelines-🤝)
* [Author Info](#author-info-👺)
* [Questions?](#questions-❓)
* [License](#license-🚩)

---

## Learning Points ✍️

The main learning point of this project was learning how to use MongoDB and Mongoose as a backend database.
MongoDB compared to MySQL is a NoSQL database, meaning that it doesn't use tables and rows to store data, but instead uses collections and documents. This means that the data is stored in a JSON-like format, which is much easier to read and manipulate compared to MySQL.

The drawbacks of using MongoDB is that it's not as strict as MySQL in terms of data validation. For example, if you were to create a new user in MySQL, you would have to specify the data type of each column, such as VARCHAR, INT, etc. However, in MongoDB, you can just create a new user and specify the data type in the schema, but it won't be enforced in the database. This means that you can create a new user with a name that's a number, or a password that's a boolean, and it will still be created in the database.

---

## Installation Instructions 📥

To install this app, follow the instructions below:

1. Ensure you have MongoDB and Node.js installed on your computer.
2. Download/clone the contents of this repo onto your local machine.
3. Open your integrated terminal in the root directory of this app.
4. Run `npm i` or `npm install` in your terminal to download all of the dependencies.

---

## Usage Information ✅

To use this application, follow the steps below:

1. Make sure you have installed all of the dependencies.
2. Run `npm start` in the terminal that's opened to the root directory of this app.
3. Make GET, POST, PUT, and DELETE requests to `http://localhost:3001/api/users` or `http://localhost:3001/api/thoughts` to get started filling your database with information. For more specific route details, please see the [Description](#description-📝) section above.

---

## Contribution Guidelines 🤝

If you would like to contribute to this project, please contact me using the information below. Please note that you'll be required to follow the [Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/) listed here.

---

## Author Info

### ***Didrik Lindberg***
* [Github](https://www.github.com/Didriklindberg)
* [LinkedIn](https://www.linkedin.com/in/Didriklindberg)

---

## Questions

Email me at: [daevidvo@gmail.com](mailto:lindberg.didrik@gmail.com) or [visit my GitHub](https://www.github.com/Didriklindberg)

---

## License 🚩

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

