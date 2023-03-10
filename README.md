# Interview Scheduler
The interview scheduler is an web application that tracks student interviews built with the latest tools to optimize ones user experience! We utilaize React's bult-in and custom hooks that allows user to add, edit, and delete appointments in real time! Data is stored by the API server using PSQL (PostgreSQL. Using JSON the client application is able to communicate with the API server over HTTP in a JSON format. Quality control is important, so this project follows best practicies of TDD (Test Driven Development), where individual components are tested in isloation and End-To-End testing is preformed!

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

* Package.json set up to run in M2 chip machine. In case you are running in other system please delete the ```-openssl-legacy-provider``` before run the app.

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## API server and Database Setup

For full functionality both must run concurrently: the client and the API server applications.
Go to <https://github.com/lighthouse-labs/scheduler-api/> to start by forking and cloning the scheduler-api server
Follow the steps outlined in README to install and setup the database
Fork and clone this repo
Navigate to the root directory and install dependencies with ```npm install```
Once you have the database setup and the scheduler-api server running, run the following command from the root directory of the project ➜ ```npm start```

## Preview

!["screenshot of scheduler features"](https://github.com/daejung90/scheduler/blob/master/public/images/Scheduler%20app.png?raw=true)
!["screenshot of scheduler features"](https://github.com/daejung90/scheduler/blob/master/public/images/Scheduler%202%20app.png?raw=true)
!["screenshot of scheduler features"](https://github.com/daejung90/scheduler/blob/master/public/images/Scheduler%201%20app.png?raw=true)




## Dependencies

* Axios
* Classnames
* Normalize.css
* React
* React-dom
* React-scripts
* Babel/core
* Storybook/addon-actions
* Storybook/addon-backgrounds
* Storybook/addon-links
* Storybook/addons
* Storybook/react
* Testing-library/jest-dom
* Testing-library/react
* Testing-library/react-hooks
* Babel-loader
* Node-sass
* Prop-types
* React-test-renderer
* Footer

## Project Stacks

Front-End:
React, Axios, JSX, HTML, SASS, JavaScript

Back-End:
Express, Node.js, PostgreSQL

Testing:
Storybook, Webpack Dev Server, Jest, Testing Library and Cypress



