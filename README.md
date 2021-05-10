# inuba_prueba-tecnica_frontend

inuba_prueba-tecnica_frontend is the technical test

## 🧾 It uses

- React v17
- Redux v4
- axios for making api requests
- lodash for some helper functions
- nes-react (as a ui component library)
- sass for customizing the ui, because does not provide layout components

## 🌍 Other resources

[Trello panel](https://trello.com/b/hyuhBJYQ/inubaprueba-tecnica)

[Initial mockups](https://www.figma.com/file/DvI251mQJdwpyWGRWJgn3r/iNuba-frontend?node-id=0%3A1)

[Subsequent mockups & diagrams](https://drive.google.com/file/d/1RmcFIKnk7A1h7taemuNugdHHGXqbEPi3/view?usp=sharing)

## 🛠 Installation & 🚀 Usage

Use the node package manager [npm](https://npmjs.com/) to install inuba_prueba-tecnica_frontend.

```javascript
// for the 🛠 installation
cd ./inuba_prueba-tecnica_frontend
npm i

// for 🚀 running the project
npm start
```

## A NOTE ON THE PROJECT PROCESS DEVELOPMENT:

- Although the first mvp is not yet finished, the state of the application if fully functional and, for the first mvp, it is complete.
- The ui was first implemented using a mobile-first approach. So, in order to properly visualize the current state of the app it is advised to:

  1. Activate the developer tools
  1. Set the iphone 6/7 profile

- Due to lack of available time I present the whole project in a single master branch. But I wanted to redo the project using multiple branches (master, develop and feature and feature/01_feature-description and so on), without erasing them, so that you can see I'm able to use control version. I'm able to use git flow too. Just in this case I would choose not to use it. I started the project in a testing repo (here it is: [testing-react-redux](https://github.com/drzoidberg/testing-react-redux.git)), but the commits are poorly formatted and often are undescriptive. I'm aware this is not a good practice. If I had more time I've formatted and described the branches & commits somewhat like this:

branch name example: `feature/building-Login-component`

commit example: `successfully built Login component`

other commit example: `building Login component: setting prop isLoading`
