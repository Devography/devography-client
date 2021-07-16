#devOgraphy
Home_Mobile.jpeg![Home_Mobile](https://user-images.githubusercontent.com/65795477/125976547-f39ebe7f-00e5-4988-b107-ff53a5ca906f.jpeg)


#Project Description
devOgraphy is a working, interactive, full-stack application that receives data from . The app allows users to find a recipe that fits their dietary needs and search for any key ingredient that the user wants in the recipe. Click on the link below and start cooking!

Link To Site: https://devography.netlify.app/

#Programs/Applications Used:
React
React BootStrap
JSX
CSS
Yarn

#Learning Experience
Cut problems into smaller pieces and console.log any unknown data. This was our first project as a team and so we relied heavily upon each other to debug our own problems. We learned a lot about division of labor, project management, and how to utilize each of our individual strengths. Read documentation!!! Most of the answers are available if you know where and how to search.

#Setting Up Project
One of the key feature of React is the composition of the functional components. Components are reuseable functions in React, and in order to efficiently build our app, we had to carefully decide on a uniform set of data and plan who would work on which components. Before diving into the creating the app, understanding the components hierarchy.

Component Hierarchy 001

#Setting Up Core Structure
React Components
The Component Hierarchy diagram, above, represents of how the components are structured in our app. In devOgraphy, there are 8 components. Each being a child of the 'App' components, minus the 'Recipes' and 'Recipe'.

In this case, all of the event listeners and the main API calls was done in the 'App.js' file and is passed down to the Search Components, then to Recipes and Recipe.

#Dynamic API Calls
By creating our own API, the App is able to make dynamic request. For this app, the programming languages endpoint was used. So different props variables were created to make multiple calls.

#Focusing on User Experience
Creating a responsive App. During my last project, I created an app that was not mobile friendly. With that in mind, this app was to ensure it was responsive. With the help of bootstrap and flex, the app can be view on different media screen.

#Problem Areas
One of the problem area was the API call being blocked by the CORS poilcy. Cross-origin resource sharing (CORS) allows the server to indicate other origins. To bypass the error, mode is a read only property that contains different type of mofe of request, one of which is 'cors'.

#Future Directions
Creating a 'Favorite' Section (In-progress)
Using another API call that allows the user to search food products via barcode or string search to get the nutrition facts.

#Accomplishments
The app is responsive.
References
React
