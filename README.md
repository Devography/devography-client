## devOgraphy
devOgraphy_mobile.jpeg![devOgraphy_mobile](https://user-images.githubusercontent.com/65795477/125980378-26c0e672-d7a1-4ea6-8fff-702595eec637.jpeg)



## Project Description
devOgraphy is a working, interactive, full-stack application that receives data from a custom build API. The app allows users to find information about a specific programming language and to view the language's icon, creation date, author, and .

Link To Site: https://devography.netlify.app/

## Programs/Applications Used:
React
React BootStrap
JSX
CSS
Yarn

## Learning Experience
This was our first project as a team and so we relied heavily upon each other to debug our own problems. We learned a lot about division of labor, project planning, project management, and how to utilize each of our individual strengths. Read documentation!!! Most of the answers are available if you know where and how to search.

## Setting Up Project
One of the key feature of React is the composition of the functional components. Components are reuseable functions in React, and in order to efficiently build our app, we had to carefully decide on a uniform set of data and plan who would work on which components. Before diving into the creating the app, understanding the components hierarchy is required.


## Setting Up Core Structure
React Components
The Component Hierarchy diagram, above, represents of how the components are structured in our app. In devOgraphy, there are 8 components. Each being a child of the 'App' components, minus the 'Recipes' and 'Recipe'.

In this case, all of the event listeners and the main API calls was done in the 'App.js' file and is passed down to the Search Components, then to Recipes and Recipe.

## Dynamic API Calls
By creating our own API, the App is able to make dynamic request. For this app, the programming languages endpoint was used. So different props variables were created to make multiple calls.

## User Experience
Creating a responsive App. During my last project, I created an app that was not mobile friendly. With that in mind, this app was to ensure it was responsive. With the help of bootstrap and flex, the app can be view on different media screen.


## Future Directions
Creating a 'Favorite' Section (In-progress)
Using another API call that allows the user to search food products via barcode or string search to get the nutrition facts.

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
[MIT](https://choosealicense.com/licenses/mit/)
