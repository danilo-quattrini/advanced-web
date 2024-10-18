# advanced-web

Welcome to **advanced-web**! This project uses Node.js to create a web server, handle HTTP requests, and interact with a MySQL database. Below, you'll find all the instructions you need to set up the environment, including the necessary modules.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (version 12 or higher recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager, comes with Node.js)

## Installation Instructions

### 1. Clone the Repository

Start by cloning this repository to your local machine:

```bash
git clone https://github.com/danilo-quattrini/advanced-web.git
cd advanced-web
cd exercisesPresented
```
### 2. Installing Required Modules

This project relies on several Node.js modules to function correctly. You will need to install the following packages inside the directory:

	1.	MySQL - Used to interact with the MySQL database
	2.	Express - A web framework for handling routing and server setup
	3.	Request - To make HTTP requests to external APIs
	4.	HTTP - Core Node.js module used for creating HTTP servers

To install these modules, follow these steps:

Install the modules using npm

Run the following command in your terminal inside the project directory:
```bash
npm install mysql express request
```
### Note on HTTP module

The http module is a built-in module in Node.js, so you do not need to install it separately.

### 3. Verify Installation

After running the installation commands, you can check that the modules have been installed correctly by looking into the node_modules directory in your project. You should see the following folders:

	•	mysql
	•	express
	•	request

Alternatively, you can check installed modules with this command:
```bash
npm list
```
Additional Configuration

You might need to set up the database connection. Ensure that you have the following information available:

	•	MySQL host (default: localhost)
	•	MySQL user (default: root)
	•	MySQL password (password you used to configure the db)
	•	Database name

Make sure to update the connection.js file with your database details.

### Troubleshooting

If you encounter any issues during the installation process, try the following:

	1.	Ensure you have Node.js and npm installed: You can check this by running node -v and npm -v to display the installed versions.
	2.	Delete the node_modules folder and reinstall: If you face issues, delete the existing node_modules directory and run npm install again.
	3.	Check your database credentials: Double-check that your database connection details are correct in the connection.js file.

# Dependencies

This project uses the following dependencies:

	•	MySQL: Used for database management.
	•	Express: Web server framework for Node.js.
	•	Request: Simplified HTTP request client.

# Contributing

Feel free to contribute to this project! Please fork the repository, make your changes, and submit a pull request for review.

# License

This project is licensed under the MIT License - see the LICENSE file for details.
