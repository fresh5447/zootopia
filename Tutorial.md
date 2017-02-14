
## Step 1: Setup the react app.

Fork the zootopia repository from fresh5447/zootopia to your GitHub account.
Clone from your fork of the zootopia repo. `git clone <url>`
checkout the react-start branch `git checkout react-start`
in your terminal run `npm install` to install all prior dependencies
create a react app: `create-react-app client` -this will put all the react files into the directory client
delete the unneeded files that were created by `create-react-app`, leave only index.js and index.css
commit this step to GitHub. --when committing DOUBLECHECK you are in the root of your project
`git status` -shows what files need to be committed
`git add -A` -adds all current files
`git commit -m "(write a description of what you just did)"`-commits your code to GitHub


## Step 2: Build out App
Create an App file `App.js` within src directory
you can either right click on the src directory in atom and choose create file or
within the src directory in your terminal you can run `touch App.js`
import React   `import React from 'react'` - put './(file name)' when importing your own files
Create a stateful component that is meant to display the desired view
`var App = React.createClass({})`
  and will keep track of the desired view through a state variable
  ```
    getInitialState: function () {
      return (
        {activeComponent: 'Home', activeId: null}
      );
    },

  ```
the state variable that keeps track of the active view is `activeComponent`
`activeId` is for keeping track of which animal is going to be updated

Create a function `updateActiveComponent` that will change the current state
`this.setState({})`
Commit changes to GitHub

Create a function `renderProperComponent` that uses the activeComponent state variable to determine which component to return based on conditional statements
```
  if(this.state.activeComponent==='Home'){
    return(<Home updateActiveComponent={this.updateActiveComponent}/>);
  } else {
    return null;
  }
```
Include the output of renderProperComponent in App render function
Make sure to export App `export default App;`
import this into index.js `import App from './App';`
Commit this step to GitHub

##Step 3: Creating the HomeView
Create a Home.js file within the src directory
Create a stateless component that will render a heading, a viewAll button, and a postNew button
`<Button bsStyle="danger" onClick={ () => props.updateActiveComponent('viewAll')}>View all animals </Button>`
You will need to `import {Button} from 'react-bootstrap'` in Home.js
Then in your terminal run `npm install --save react-bootstrap` within your client directory
export Home
import Home into App
commit this step to GitHub

##Step 4: Viewing all animals
Create an AnimalsContainer.js file within the src directory
import React
import AnimalsTable
import jquery `import $ from 'jquery'`
in your terminal and within the client directory install jquery `npm install --save jquery`
Create a stateful component that will display the AnimalsTable
After declaring the state create a function `componentWillMount` that will get the animals from the server
    --componentWillMount is a special React call that runs just before render
Add a function to `getAnimalsFromServer` using a jquery ajax call
commit this step to GitHub

##Step 5: Creating the AnimalsTable
Create a new file `AnimalsTable.js` within the src directory
import React
import {Table, Button} from react-bootstrap
Create a stateless component that will return a table full of your animals
You will need to create a variable to map the array of animals and created a table row for each of the animals
```  
var Animals = props.animals.map(function (item) {
    return (<tr> <td> item.name </td> <td> item.species </td> <tr>);
```
##Step 6: Set up simultaneous server running
Create a file in Zootopia called Procfile.dev
within the file put
```
web: cd client && npm start
api: PORT=3001 npm run server
```
in the scripts object of package.json contained in zootopia add
```
"dev": "nf start -p 3000 --procfile Procfile.dev",
"server": "node server.js"
```
in package.json contained in src add  `"proxy": "http://localhost:3001/",`

##Step 7: Deleting an animals
Within Animals container create a new function called `deleteHandler` that makes a jquery ajax call
pass it the parameter id
in AnimalsTable add a button to the end of the table row that calls deleteHandler

##Step 8: posting an animal
Create a new file within src called `PostAnimalForm.js`
Create a new file within src called `PostAnimalContainer.js`

Add route for `postNew` in App that renders PostAnimalContainer

in `PostAnimalForm` import React
import Form, FormControl, FormGroup, and Button from react-bootstrap
create a stateless component that will display a form
pass onChange and onClick handlers from PostAnimalContainer to PostAnimalForm

in `PostAnimalContainer` create a stateful component
within that component create your `onChangeHandler` function and your `onClickHandler` Function
Your onChangeHandler updates the appropriate state variable
your onClick function runs a post request on your api with the state as its data
pass these as props to your PostAnimalForm

submit thi step to GitHub

##Step 9: Updating an animal
Create a new file within src called `EditAnimalForm.js`
Create a new file within src called `EditAnimalContainer.js`

Add route for `editAnimal` in App that renders EditAnimalContainer

in `EditAnimalForm` import React
import Form, FormControl, FormGroup, and Button from react-bootstrap
create a stateless component that will display a form
pass onChange and onClick handlers from EditAnimalContainer to EditAnimalForm

in `EditAnimalContainer` create a stateful component
within that component create your `onChangeHandler` function and your `onClickHandler` Function
Your onChangeHandler updates the appropriate state variable
your onClick function runs a post request on your api with the state as its data
pass these as props to your EditAnimalForm

In `AnimalsContainer` create an `updateHandler` function that will update the activeComponent to the editAnimal view with the correct id
pass the updateHandler in as a prop

commit this step to GitHub



## Step 1: Set up the react app.

Fork the zootopia repository from fresh5447/zootopia my github account.

Clone from my fork of the zootopia reop. `git clone <url>`

Checkout the react-start branch `git checkout react-start`

Create a react app: `create-react-app client`

Delete the unnecessary files that were created by `create-react-app`, leave only index.js and index.css

Commit each step to github
`git status`
`git add -A`
`git commit -m <message>`
`git push origin react-work`

## Step 2: Build out App.js

Create an App.js file `touch App.js` in src directory

In App.js, create a stateful component `var App = React.createClass({})` that is meant to render and keep track of each view

Write a function to set initial state `activeComponent` and which animal to update `activeId`
```
getInitialState: function() {
  return {activeComponent: "Home", activeId: null};
},
```

Create function `updateActiveComponent` that accepts `comp` and `id` to update the current state
```
updateActiveComponent: function (comp, id) {
  this.setState({activeComponent: comp, activeId: id});
},
```

Create function `renderProperComponent` that uses `activeComponent` state variable to determine which component to return
```
renderProperComponent: function() {
  if (this.state.activeComponent === 'Home') {
    return <Home updateActiveComponent={this.updateActiveComponent} />
  } else {
    return null
  }
},
```

Finish by writing render function to send a view
```
render: function() {
  return (
    <div>
      {this.renderProperComponent()}
    </div>
  )
}
```

## Step 3: Creating the home view

Import react-bootstrap with terminal for later css rendering `npm install --save react-bootstrap`

Create a stateless component in new file `Home.js` that will render a heading, a viewAll button, and a postNew button.
```
import React from 'react'

var Home = function(props) {
  return (
    <div>
      <h1>Zootopia</h1>
      <button onClick={() => props.updateActiveComponent('viewAll')}>View All Animals</button>
      <button onClick={() => props.updateActiveComponent('postNew')}>Post New Animal</button>
    </div>
  )
}

export default Home
```

Import Home file into App.js
`import Home from './Home';`

## Step 4: Viewing all animals

Create `AnimalsContainer.js` in src directory

Import AnimalsTable view `import AnimalsTable from './AnimalsTable'`

Create a stateful component that will display all animals imported from AnimalsTable, and set initial state
```
var AnimalsContainer = React.createClass({
  getInitialState: function() {
    return ({animals: null})
  }
})
```

Install jquery with terminal `npm install --save jquery`

Import jquery `import $ from 'jquery';`

Write function to get animal data from server before render function is run
```
componentWillMount: function() {
  this.getAnimalsFromServer();
},
getAnimalsFromServer: function() {
  var that = this
  $.ajax({
    url: '/api/animals',
    method: 'GET'
  }).done(function(data) {
    that.setState({animals: data})
  })
}
```

Send to the view
```
render: function() {
  return (
    <div>
      <AnimalsTable animals={this.state.animals} />
    </div>
  )
}
```

## Step 5: Creating the AnimalsTable view

Create AnimalsTable.js file

import `{Table, Button}` from react-bootstrap

Write stateless component to generate animals html and serve it to the view.
```
function AnimalsTable(props) {
  var animals = props.animals.map(function(item) {
    return <tr>
             <td>{item.name}</td>
             <td>{item.species}</td>
           </tr>;
  });
  return (
    <Table hover>
      <tr>
        <th>Name</th>
        <th>Species</th>
      </tr>
      {animals}
    </Table>
  )
}
```

## Step 6: Setting up server to proxy content to port 3001

Create a file in zootopia called `Procfile.dev`

Within file put
```
web: cd client && npm start
api: PORT=3001 npm run server
```

in scripts object of package.json contained in zootopia add
```
"dev": "nf start -p 3000 --procfile Procfile.dev",
"server": "node server.js"
```

In package.json contained in src add `"proxy" : "http://localhost:3001/"`

## Step 7: Adding create method

Add route for postNew in App.js to render PostAnimalContainer

Create two files, `PostAnimalContainer.js` and `PostAnimalForm.js`

Write stateless component to display a form within `PostAnimalForm`

Write and pass onChange and onSubmit handlers from `PostAnimalContainer` to form inputs and buttons

onChange handler updates the current stateless

onSubmit handler handles the post request

## Step 8: Adding delete method

Within `AnimalsContainer.js` write new function called `deleteHandler` which makes jquery ajax call passing parameter id

Add button to `AnimalsTable.js` that calls `deleteHandler`
```
<td><Button bsStyle="primary" onClick={(id) => props.deleteHandler(item._id)}>Delete</Button></td>
```

## Step 9: Adding update method

Add route for updateAnimal in App.js to render PostAnimalContainer, passing animalId as an additional parameter

Create two files, `UpdateAnimalContainer.js` and `UpdateAnimalForm.js`

Write logic to send an ajax call to get an animal, then change and post logic similar to creating a new animal

Render the view layer, sending the animal object

Configure `UpdateAnimalForm` to render the view, using the animal data to populate the form fields



Done!

