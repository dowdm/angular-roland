# **Roland(US)- Partial Analog**

#### By Matt Dowdney

### This is a partial clone of the Roland US website from https://www.roland.com/us/ as viewed from a medium sized viewport(desktop/laptop).  The main objectives will be 1) resembling the main page from a component perspective(roughly); 2)connecting to  a product database to retrieve products' information (note: news and videos will not be in a database); 3)routing to different product pages dynamically.

## Current User Stories

| View  | Feature | Component |
| ----- | --- | --- |
| Home | Homepage should display featured products | Root |
| Home | Homepage should display featured videos | Root |
| Home | Homepage should display featured news| Root |
| Home | Selected featured product should reveal product details | Root |
| Home | Selected featured news should reveal featured news details | Root|

## Future User Stories

| View  | Feature | Component |
| ----- | --- | --- |
|
| Product | Selected featured product should route to page of that product | Product-Details |

TO-DO: Implement Firebase database for Products, Implement Routing to Selected Product Details Paths, Clean and polish UI



## Setup/Installation Requirements
* To view project code, visit: https://github.com/dowdm/angular-roland.git
* To view project, install nodejs, typescript and anglular cli. Then clone the project to your desktop from https://github.com/dowdm/angular-roland.git , navigating into the project folder from the command line. Run "npm install" from the command line and  build the database(see below). Finally  enter "ng serve --open" from the command line to open a browser and server, running the project.

1. This will require a Firebase database, so set up an account with them.
2. Add a new project from the Firebase console, naming it roland-us.
3. Create a file called api-keys.ts in the project src/app folder.
4. Paste the following in your api-keys file, replacing the actual credentials with that from "Add Firebase to your web app" badge within the Firebase Project Overview:
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
5. Also within the Overview, click on the database tab , and click on 'Get Started' for a Realtime Database- starting it in test mode.
6. Finally, click on the three vertical dots within th roland-us database and select import JSON. Import the roland-us.json file from the cloned repository.




## Known Bugs

## Technologies Used

* HTML
* CSS _(Bootstrap 3.3.7)_
* JavaScript _(jQuery 3.2.1)_
* Node.js
* Webpack
* ESLint
* Jasmine
* Karma
* Babel
* Angular

## License

* GPL

Matt Dowdney © 2018
