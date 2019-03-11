# React-Node Week3 ReactJS class example

Here two projects work together, the Client and the Server.
Client is written in ReactJS and Server in NodeJS during class.
The challenge (after you understand the code) is to understand what is what and where, to start and hooks things up.

Our simple app should present a counter with two buttons + and -.
The initial count value shall be fetched from the Server at startup.

## Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

We added our components, Counter that has the state (and manages it) and two child components Control and Display.

## Server

Node Express, one single file. This one serves the api-endpoints AND the whole client app as well! If client app is built using `npm run build` webpack will build it into the directory build/. This server serves the content of this directory.

## Run/Test/Develop

To run, always start the server:

- Go to server's directory and run `node app.js`
- Check that it is up and listening on a port

Then start the client:

- Using Webpack, just `npm start` like always with CRA.
- After client is built with `npm run build` open your browser and go to the url where serer promises to serve. Server will now serve both your client and the api-end-points that the Client calls.
