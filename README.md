# TechAAG-backend-Internship-Task

Introduction
The URL Shortener API enables users to create, manage, and track shortened URLs. This API supports user authentication, CRUD operations for URLs, and analytics to monitor usage metrics. It is designed to be scalable, efficient, and easy to integrate into existing systems.

Features
User Authentication: Secure login and registration for users.
URL Management:
Create shortened URLs from long URLs.
Retrieve the original URL using the shortened version.
Update existing shortened URLs.
Delete shortened URLs.
Analytics:
Track the number of clicks on shortened URLs.
Monitor the geographic location of users.
View click-through trends over time.

Technologies Used
Backend: Node.js, Express
Database: MongoDB (Mongoose ORM)
Authentication: JSON Web Tokens (JWT)
Analytics: Integrated with IP geolocation services and timestamps.

How to Use

1. Clone the Repository
   git clone https://github.com/yourusername/url-shortener-api.git

2. Install Dependencies
   Navigate to the project directory and install the dependencies:

cd url-shortener-api
npm install

3. Run the API
   To start the server, run the following command:

npm start
