# Angular 14 Project with In-Memory Web API

This project is an Angular 14 application that uses angular-in-memory-web-api to simulate backend data operations. The application includes three input fields: a text input, a checkbox, and a radio button. When any of these inputs is changed, the application makes a request to the fake backend to update the value. Upon successful update, the input is refreshed, and a success message is displayed.

## Features

- `Text Input:` Allows users to enter and update text data.
- `Checkbox:` Lets users toggle a boolean value.
- `Radio Button:` Enables selection between predefined options.
- `Fake Backend:` Implements a mock backend using angular-in-memory-web-api.
- `Real-Time Updates:` Inputs are updated instantly upon successful backend response.
- `Success Message:` Displays a confirmation message when data is successfully updated.

## Installation

To get started with this project, follow these steps:

- Clone the repository: 
- Install dependencies: `npm install`
- Run the application: `ng serve`

The application will be available at http://localhost:4200/.


## Dependencies
- Angular 14
- angular-in-memory-web-api
