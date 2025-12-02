<h1>Bertie's Books</h1>
A Node.js and Express.js web application built with EJS templates to showcase a book shop.

<h2>Technologies Used:</h2>

[![CSS3][CSS3-shield]][CSS3-url]
[![JavaScript][JavaScript-shield]][JavaScript-url]
[![Node.js][NodeJS-shield]][NodeJS-url]
[![Express.js][Express-shield]][Express-url]
[![EJS][EJS-shield]][EJS-url]



[CSS3-shield]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS

[JavaScript-shield]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript

[NodeJS-shield]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[NodeJS-url]: https://nodejs.org/

[Express-shield]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/

[EJS-shield]: https://img.shields.io/badge/EJS-8BC34A?style=for-the-badge&logo=ejs&logoColor=white
[EJS-url]: https://ejs.co/


19.	In a section called dotenv, briefly document how you have implemented this feature in your readme.md

<h2>DotEnv</h2>
Within this project, there is a .env file that consists of sensitive information that is mandatory too need in order to fun the project. 
This information is protected through the .env which you can than utilise in the virtual machine.

<h2>Set up Instructions</h2>

### 1. Initialize the Project
Open your terminal in the project folder and run:

```
npm init
npm install express
npm install ejs
npm install dotenv
npm install express-sanitizer
npm install express-session
npm install requests
```

### 2. Start the Server
Run the following command to start the server:

```
node index.js
```

### 3. Open in browser
Once the server is running, open your browser and go to:

```
http://localhost:8000
```

### 4. My SQL Set Up
1. Download and install mysql server and sql workbench than do the following command:
```
mysql -u root -p
```

2. Create database and include the users and books

```
CREATE DATABASE IF NOT EXISTS berties_books;
USE berties_books;

# Create the tables
CREATE TABLE IF NOT EXISTS books (
    id     INT AUTO_INCREMENT,
    name   VARCHAR(50),
    price  DECIMAL(5, 2),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    hashed_password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS audit_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    action VARCHAR(255),
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
GRANT ALL PRIVILEGES ON berties_books.* TO 'berties_books_app'@'localhost';
FLUSH PRIVILEGES;

```


### Sanitisation
| Page                 | Why Sanitisation Is Applied                                     |
| -------------------- | --------------------------------------------------------------- |
| **Login / LoggedIn** | Cleans email + password inputs and prevents SQL injection.      |
| **Add a Book**       | Ensures book name/price cannot contain harmful code or queries. |
| **Register**         | Sanitises user details and prevents malicious input on signup.  |

<h2>Page Access Control</h2>


| Page                | Access Level    | Reason                                               |
| ------------------- | --------------- | ---------------------------------------------------- |
| **Audit**           | 🔴 Restricted   | Contains sensitive login history and system records. |
| **List**            | 🔴 Restricted   | Displays user-specific or protected data.            |
| **Logout**          | 🔴 Restricted   | Only available to authenticated users.               |
| **All other pages** | 🟢 Unrestricted | Publicly accessible and safe without authentication. |


<h2>Route Description</h2>

---

| Page / Route                            | Description                                                                                 |
| --------------------------------------- | -------------------------------------------------------------------------------------------- |
| 📘 **List all books**                   | Displays all books stored in the database                                                    |
| ➕ **Add a book**                       | Shows a form to add a new book (name + price)                                                |
| 🔍 **Search (UI)**                      | Allows users to search for a book name using a web form                                      |
| 💸 **Bargain books**                    | Lists books priced under £20                                                                 |
| 🔑 **Login**                            | User login page where registered users authenticate                                          |
| 📝 **Register**                         | Form for creating a new user account (name, email, password)                                 |
| 🕵️ **Audit Log**                        | Shows login history: usernames, timestamps, IP addresses                                     |
| 🌦️ **Weather Page (UI)**                | Interactive page where users enter a city and receive live weather information               |

---

### **📡 API Routes (Backend JSON API)**

| API Route                                 | Description                                                                                   |
| ------------------------------------------ | --------------------------------------------------------------------------------------------- |
| **GET /api/books**                        | Returns ALL books in JSON format                                                               |
| **GET /api/books?search=term**            | Returns books where the name contains “term”                                                   |
| **GET /api/books?minprice=5&maxprice=10** | Returns books priced **between** a user-defined price range                                    |
| **GET /api/books?sort=name**              | Returns books **sorted by name (ascending)**                                                   |
| **GET /api/books?sort=price**             | Returns books **sorted by price (ascending)**                                                  |
| **GET /api/books?search=term&sort=price** | Combined search + sorting                                                                      |
| **GET /api/books?minprice=10&sort=name**  | Combined price range + sorting                                                                 |

---

### **🌦️ API Route — Weather**

| API Route             | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| **GET /weather**      | Accepts a `city` query parameter and returns live weather data |

Examples: London, New York etc


<h2>Images of website</h2>

![alt text](/images/i1.png "Title")

![alt text](/images/i2.png "Title")

![alt text](/images/i3.png "Title")

