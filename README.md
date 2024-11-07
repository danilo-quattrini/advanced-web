# advanced-web

This project is an advanced application built with Node.js, Express, Pug (for templating), and MySQL as the database. The project aims to provide an interactive and efficient solution for [project purpose, e.g., task management, e-commerce, etc.]. 

## Features
- User-friendly interface with Pug templates
- Robust backend built with Express.js
- MySQL integration for data persistence

## Getting Started

### Prerequisites
Ensure you have Node.js and MySQL installed on your machine.

- [Download Node.js](https://nodejs.org/)
- [Download MySQL](https://dev.mysql.com/downloads/)

### Installation

1. **Clone the Repository**

  ```bash
   #clone the repository
   git clone https://github.com/danilo-quattrini/advanced-web.git
   #open the repository
   cd advanced-web
   #open the repository with the exercises
   cd exercisesPresented
   #check if you have node and npm you should see the verion of them
   node -v && npm -v
   ```
2. **Install the modules**
```bash
  #install the necessary modules
  npm install express mysql pug request
```
3.	**Configure MySQL**
- Start your MySQL server.
-	Create a new database for the project:

```sql
CREATE DATABASE your_database_name;
```
-Update your MySQL credentials in the project configuration file (e.g., config.js or .env).

4. **Run the Application you want** \
Start the server with:
```bash
node 04-createTable.js
```
