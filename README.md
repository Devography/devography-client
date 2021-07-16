## devOgraphy

[Home_Mobile](https://user-images.githubusercontent.com/65795477/125976547-f39ebe7f-00e5-4988-b107-ff53a5ca906f.jpeg)


## Project Description
devOgraphy is a working, interactive, full-stack application that receives data from a custom API that we designed. The app allows users to learn more about programming languages, their icons, their authors, and their creation date.

Your front-end must use React and leverage the backend API in the above requirements.
You must communicate with the back-end API RESTfully to Create, Read, Update, and Destroy resources (using either fetch or axios).
You must use either CSS Grid or Flexbox along with media queries to make your app responsive across mobile, tablet, and desktop widths.
You must have at least 4 components


Link To Site: https://devography.netlify.app/

## Programs/Applications Used:
React
JSX
CSS
Yarn


## Dependencies
react": "^17.0.2",
    "react-bootstrap": "^1.6.1",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-router": "^5.2.0",
    "react-router-bootstrap": "^0.25.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",

## Learning Experience
Cut problems into smaller pieces and console.log any unknown data. This was our first project as a team and so we relied heavily upon each other to debug our own problems. We learned a lot about communication, division of labor, project management, and how to utilize each of our individual strengths. Read documentation!!! Most of the answers are available if you know where and how to search.

## Setting Up Project
One of the key feature of React is the composition of the functional components. Components are reuseable functions in React, and in order to efficiently build our app, we had to carefully decide on a uniform set of data and plan who would work on which components. Before diving into the creating the app, it was important to understand the components hierarchy.



## Building the Core Structure
React Components
The Component Hierarchy diagram, above, represents of how the components are structured in our app. In devOgraphy, there are 8 components. Each being a child of the 'App' components, except for the NavHeader and the Footer component.

In this case, all of the event listeners and the main API calls were done in the 'App.js' file and that data is passed down to Languages and then Language.



## Dynamic API Calls
By creating our own API, the App is able to make dynamic request. For this app, the programming languages endpoint was used. So different props variables were created to make multiple calls.

## User Experience - Responsive design.
Creating a responsive App. devOgraphy uses React bootstap along with Flexbox and media queries in order to make it responsive across mobile, tablet, and desktop widths.

## Problem Areas
One of the problem area was the API call being blocked by the CORS poilcy. Cross-origin resource sharing (CORS) allows the server to indicate other origins. To bypass the error, mode is a read only property that contains different type of mofe of request, one of which is 'cors'.

## Learning Experience
This was our first project as a team and so we relied heavily upon each other to debug our own problems. We learned a lot about division of labor, project planning, project management, and how to utilize each of our individual strengths. Read documentation!!! Most of the answers are available if you know where and how to search.

## Setting Up Project
One of the key feature of React is the composition of the functional components. Components are reuseable functions in React, and in order to efficiently build our app, we had to carefully decide on a uniform set of data and plan who would work on which components. Before diving into the creating the app, understanding the components hierarchy is required.

component-tree.png<img width="514" alt="component-tree" src="https://user-images.githubusercontent.com/65795477/125981555-ecc23dba-8ce6-4487-9529-a0735615e308.png">


## Setting Up Core Structure
React Components
The Component Hierarchy diagram, above, represents of how the components are structured in our app. In devOgraphy, there are 6 components. Each being a child of the 'App' components, except for the 'Footer' and 'NavHeader'.

In this case, all of the event listeners and the main API calls was done in the 'App.js' file and is passed down to the Search Components, then to Languages and Language.

## Dynamic API Calls
By creating our own API, the App is able to make dynamic request. For this app, the programming languages endpoint was used. So different props variables were created to make multiple calls.

## User Experience
This app uses a combination of React bootstrap and Flexbox along with media queries to make it responsive across mobile, tablet, and desktop devices.



## Future Directions
Creating a 'Favorite' Section (In-progress)
.

## Accomplishments
The app is responsive.
References
React

# Foobar

Foobar is a Python library for dealing with word pluralization.

## Installation / Dependencies

Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage

```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')

```
## Roadmap


## Support


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## License

