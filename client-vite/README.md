# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Shakes updates 

APP.JSX
React Router: React Router is used for client-side routing within the app.
Local Storage: User data is stored locally using the browser's local storage mechanism. This is for Sign Up form (You can view Sign Up data saves via Inspect => Application => Storage)
Install dependencies: npm install
Npm run dev
Register page (Sign Up button will route you to Success page for successful registration which restrictions have not been set yet)
Sign In for has not been set to local storage yet



LOGIN.JSX
The Login component provides a simple and intuitive user interface for logging into the application. Users are prompted to enter their email and password to access their account.

State Management
The component utilizes React's useState hook to manage state for the email and password fields.

The email state variable stores the user's email input.

The password state variable stores the user's password input.

Form Submission
When the user submits the login form, the handleSubmit function is triggered.

This function prevents the default form submission behavior and can be extended to include login logic.
Currently, the handleSubmit function only prevents the default behavior

Navigation
The Login component provides a button labeled "Don't have an account? Register" for users who do not have an account to navigate to the registration page.

Clicking the "Register" button triggers the redirectToRegister function, which redirects the user to the registration page using React Router's useHistory hook.

Styling
The component's layout and styling are implemented using Tailwind CSS classes for a clean and modern design.

Class names such as max-w-md, p-6, bg-white, shadow-lg, rounded-lg, text-2xl, btn-primary, and btn-secondary are used for styling elements.

Routing
The component imports Link and useHistory from React Router to enable navigation between different pages of the application.

The useHistory hook is used to programmatically navigate the user to the registration page when the "Register" button is clicked.


REGISTER.JSX

The Register component in our Dinosaur App is responsible for rendering the registration form and handling user registration. This component allows new users to sign up for an account by providing their full name, email, and password.

State Management
The Register component uses React's useState hook to manage state for the name, email, and password fields.
State variables are used to store user input as they type into the respective form fields.
Data Persistence
Upon submission of the registration form, the handleSubmit function is called to save the user's data to local storage.
The saveUserDataToLocalStorage function is responsible for retrieving existing user data from local storage, adding the new user data to the existing array, and then saving the updated array back to local storage.
Form Submission
When the user submits the registration form, the handleSubmit function is triggered.
This function prevents the default form submission behavior and constructs a userData object containing the user's name, email, and password.
The userData object is then passed to the saveUserDataToLocalStorage function to save the user's data.
Navigation
The Register component provides a button labeled "Already have an account? Sign In" for users who already have an account to navigate to the login page.
Clicking the "Sign In" button triggers the redirectToSignIn function, which redirects the user to the login page using React Router's useHistory hook.
Styling
The component's layout and styling are implemented using Tailwind CSS classes for a clean and modern design.
Class names such as max-w-md, p-6, bg-white, shadow-lg, rounded-lg, text-2xl, btn-primary, and btn-secondary are used for styling elements.

SUCCESS.JSX

The Success component is a simple React functional component responsible for displaying a success message to users upon successful registration. This component serves as a confirmation to users that their account has been successfully created.

Message Display
The Success component renders a success message along with a brief description thanking the user for signing up.
The message encourages users to "Unleash Your Inner T-Rex" and emphasizes the adventure awaiting them with the Dino-tastic App.
Styling
The component's layout and styling are implemented using Tailwind CSS classes for a clean and modern design.
Class names such as min-h-screen, flex, items-center, justify-center, bg-gray-50, max-w-md, p-6, bg-white, shadow-lg, rounded-lg, text-2xl, text-center, text-gray-700, and mt-4 are used for styling elements.
