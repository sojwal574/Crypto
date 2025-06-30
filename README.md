- create react app with vite : npm create vite@latest
- for installing dependencies : npm install
- other packages 
    1. npm i react-router-dom
    2. npm i react-google-charts (for displaying charts)

- clear the project
    + delete app.css file in src file
    + clear index.css, app.jsx 

- add folders components , context , pages in src

- css styling
- app.jsx work

- Navbar work

- add font family to the index.css

- Create Coin and Home folders

- import browserrouter in main.jsx and wrap App in it

- create routes for the home and Coin in the app.jsx

- Home page work 

- get Coingeco API key from google
- Go to Coingeco Doc. and go to Coins -> coins list with market data 

- Create CoinContext file in context and create context
then import the CoinContextProvider in the main.jsx and wrap App in it


// fetch api work in Coin context file

// display the coins on page in the home.jsx

navbar work // when change the dropdown to diff currency , data must change 


// Footer work



// Media queries in the Navbar.css , Home.css


// Search functionality


// charts display (Home.jsx)
// import Link and use Link so that when user clicks on the item it will take the user to the respective coin page




// to get the charts we go on the coingecko docs and get the Coin Historical charts data by id


// update the historicalDate fxn in the coin.jsx

// In the components -> create LineChart.jsx


// add charts in LineChart.jsx

// coin.jsx work to fetch the data for chart from API and then mount the LineChart.jsx into coin.jsx



// add more info about the coin in coin.jsx


// coin.css work to add css for the charts and other info



// Adding Authentication
- 🟢 Step 1: Setup Firebase Project
    Go to 👉 https://console.firebase.google.com
-  Click "Add Project"
- Give your project a name like: cryptoplace
- Click Continue
- When it asks about Google Analytics: Choose “Not now” or Disable Analytics
- Click Create Project
✅ Firebase will take a few seconds to create it.



- After project is created, you’ll be on the Project Overview screen
- Scroll and click on the </> Web icon (looks like this: </>)
- App nickname: cryptoplace-web
- Uncheck “Set up Firebase Hosting” (for now)
- Click Register App
- Copy the code like this: 
    const firebaseConfig = {
    apiKey: "AIza....",
    authDomain: "your-app.firebaseapp.com",
    projectId: "your-app",
    ...
    };
- ✅ Copy this config — we’ll paste it into React project.




- In your terminal (inside your project): npm install firebase
- src -> Firebase ->config.js
- paste the config copied from the firebase website

- Go to Firebase Console
- Left menu → Click Authentication
- Click Get Started
- Go to “Sign-in method” tab
- Click Email/Password
- Enable → Click Save


- In pages -> SignUp -> SignUp.jsx
- code in this file
- SignUp.css and code


- Create route in App.jsx
- run the app and check if working 




- src -> pages -> Login -> Login.jsx code
- Login.css code 


- Logout code in navbar.jsx
- login and signin changes to logout in navbar.jsx




- ProtectedRoute in src -> components
- untill user logs in he will not be able to see the content






