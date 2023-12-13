# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Netflix gpt
-create react app
-configure tailwind css
-Header
-Routing
-login form
-sign up form
-Form validation
-useref hook
-firebase setup
-Create signup user account in firebase
-implement Sign In user Api
-created Redux store with userslice
-Implimented Signout
-Update Profile
-Bugfix: Sign up user displayName nd profile picture update
-Bugfix: if the user is not logged in Redirect / browse to login page nd vice versa
-UnSubscribed to the onAuthStateChanges callback.
-Add hardcoded values to constant file
-Register Tmdb API and get token
-Get data from TMDB now playing movies lists api
-Custom hook for Now playing movies
-Create movieSlice
-Update store with movie data
-Planning for mainContainer and Secondary container
-Fetch data for trailer video
-Update store with Trailer video data
-Embeded the yt video nd make it autoplay nd mute
-Tailwing classes to make mainContainer  look awsome
-Build Secondary Component
-Build movie list
-build movie card
-TMDB img CDN_URL
-Made browser page amazing with tailwind css
-usePopular movie custom hook
-GPT search Page
-Gpt search bar
-Multi-language feature in our app


# Features
-Login/Sign up
   -Sign In / Sign up form
   -redirect to Browse page
   
-Browse(after Authentication)
   -Header
   -Main Movie
      -Trailer in Bg
      -Title and Description
      -Movie Suggestion
        -MovieLists * N

-NetflixGpt
   -Search Bar
   -Movie Suggestion 

-----------#########---------------
# brief about project
 -create Redux Store for Storing user Object into it which we can get when we are login it gives user object .

# Utility which is given by Firebase onAuthStateChanged Api 
-We use this in place of dispatch a function in every single place like sign-in sign-out.
-This Api is called whenever the User Sign-In,Sign-Out,Sign-up ,whenever there is an authentication state change or if you wanted to do something with Auth or handle it then you should use this Api.

# solution of the bug-1
when we using update function it will actually not update the user user name and photourl will be update after refresh so we find sol of it which is we can dispatch the function after the update so it will update our user because it takes email id,name ,etc not from the user which in update function it will take data from the auth function.

if we are extract this values from user then it will be not updated because user does not have updated value so we want a new auth info which is coming from firebase.

# good Practice
In my header componnet i have useeffect and it is called once when my component loads but my header will loaded multiple time in single session, So it will keep attaching event listener in my browser it will lind of call my onAuth function everytime when useEffect is called and ,
when my component unMounts i should also Unsubscribe to thsi action so we can clean this function. we should return function from UseEffect and unSubscribe to the onAuth callback function.

#Note-The useEffect Hook is built in a way that we can return a function inside it and this return function is where the cleanup happens. The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.

# imp-Note
when we use strict mode in our react app our api calls twice and if i remove it only happen once but this is only happend in our local project not in production.
*reason is react does extra rendering of your componets to check inconsistency between our calls.

# npm openai library
 this library gives us helper function which help us to make Api calls directly

# Always using .env file to store Keys  

# Memoization -> 
dont call api after every render if data already store in our store only use it if it is not 
there then make an api call it saves our thousands of api call .




          