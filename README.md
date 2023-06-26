# Blood-Donation-Website
This project was bootstrapped with Create React App.
## About the project
This is a blood donation website where users can search for potential donors based on their state,city and bloodgroup and reach out to them through their provided email id or phone number.
Users can also register themselves in case they want to become a donor.
## Built with
The tech stacks used here are:
* React.js
* Node.js
* Express.js
* MongoDb
* External Packages: cookieParser, bcrypt, jwt, multer, mongoose, react-router-dom
## Getting Started
To get a local copy up and running follow these simple example steps.
### Prerequisites
1. You must have VS studio installed in your system.
2. You must have created a cluster and database in mongodb atlas.
### Installation
1. On your VS machine, open a new terminal
   - Use the following command to clone the repository 
      ```sh
     git clone https://github.com/Abhishekmondal256/Blood-Donation-Website.git
     ```
2.  Create a config.env file in server directory
    - write the following in the file
       ```sh
      DATABASE="write your connection string here"
      ```
       ```sh
      SECRET_KEY="write your secret key here"
      ```
3. Install dependencies
   - Navigate to the project's root directory:
      ```bash
     cd Blood-Donation-Website
     cd client
     ```
   - Run the following command to install the project dependencies using npm:
     ```bash
     npm install
     ```
   - use the following command
      ```bash
     npm start
     ```
4. Start Server

   - Open another terminal and Navigate to the server directory using the `cd` command:
      ```bash
     cd server
     ```
   - Run the following command to start the server:
       ```bash
     nodemon app.js
     ```
## Contact
If you have any questions, suggestions, or issues, please contact [abhishekmondal453@gmail.com].





































[React-url]: https://reactjs.org/
