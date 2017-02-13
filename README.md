### Zootopia: React Solution

Solution Overview

----

__Component Hierarchy__

* App
  * Home
  * AnimalsContainer
    * AnimalsView
  * EditAnimalContainer
    * EditAnimalForm
  * PostAnimalContainer
    * PostAnimalForm


----

 __Component Details__

Components with the key word `Container`, are data components, sometimes known as smart components. It is a goal in React to manage state at the highest level that it make sense. Therefor, each one of these containers is responsible for handling and controlling the data. The rest of the components should only display data.

- App: Apps main responsility is to decide which component should be actively rendered. Since we are not using react-router, we are basically faking it with a function called `renderComponent`, which renders the proper component based on the apps `state`

- Home: Just a view component that renders a jumbotron.

- AnimalsContainer: Holds the data relevant to all animals. Defines state initially for Animals. Fetchs data from server when he loads, then renders the AnimalsView Comp, and passes the `data` to the component

- AnimalsView: Reveives the data from `AnimalsContainer` via props, displays them in a list.

- EditAnimalContainer: This component is loads the data for a specifc Animal by ID. This data is stored in state, and passed down to the form via. This state is then updated upon field change in the form. Then the function to submit the data to server is called on form submit. Lastly, the form is rendered.

- EditAnimalForm: Only the view for the form. The data and actions are passed down to this form via props.

- PostAnimalContainer: Has the submit data to sever functionality. Renders the form.

- PostAnimalForm: Only the view for the form. The data and actions are passed down to this form via props
