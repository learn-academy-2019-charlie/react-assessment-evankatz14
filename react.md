# React Assessments

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React is a modern, efficient answer to complex UI applications

- React is a flexible library that plays the role of V in an MVC framework

 
 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.
 
 
 //Your Answer
 smart components are components handle the logic (methods and conditionals) that make the program work.  They are the thinking components of the app and pass information down to the dumb components to be displayed.
 
 //Googled Answer
 "Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. No keeping tabs on it, no checking in once in a while to see how things are going. Nope. Put the info on the page and move on."
 "Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works."
#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?
 
 
 //Your Answer
 I can't remember...yarn add is a command to add modules to your app?  This will always update the node_modules folder?
 
 //Googled Answer
 "yarn add installs a package and any packages that it depends on." 
 
#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component { //added "extends Component"
      constructor(props){
        super(props)
        this.state = {
          recipes: [ //added bracket
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}
          ] //added bracket
        }
      }

      render() {
    
        return (
        <div> //added div to encompass everything in return
          {let recipes = this.state.recipes.map(function(recipe){ 
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })} //added curly bracket around the whole map function
    
          <ul>
            {this.recipes} //add this.
          </ul>
        </div>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)
 
 //Your Answer
 password, email, submit
 
 //Googled Answer
 button, checkbox, color
 
 
 #### 7. How would you explain state to a friend who doesn't know code?
 
 //Your Answer
state is a storage box for all of the items currently on your screen.  Every component is represented by a variable (or code) that can be changed.  At any time your components or variables can be changed based on how the user interacts with the app.  When the user interacts with something on the page and something on the page then changes the state has updated to coincide with the changes that the user sees on screen.  
 
 //Googled Answer
 "In the React sense, “state” is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this.state."
 
 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.
 
 
 //Your Answer
 component state is a value that can be updated.  State is a local variable to the component that holds state.  Props is a constant variable.  It is a variable that represents a snippit of state in time and then passed down to a child component.  This child component can then access the props values sent down to them.  
 
 //Googled Answer
 "In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component."
   
#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
Tic-tac-toe, or working with React in general, was one of the first times in this class I truly felt frustrated.  It took me a long time to truly grasp how the 'board' and 'squares' components were actually communicating with each other.  Because I was not fully understanding how the components were talking, I could not figure our how to set up the renders for the two components.  I ended finding an example on line and putting it in without fully understanding how the copied code was working. This didn't feel good, and it frustrated me that I couldn't refacture the code I found to look more like what we had learned in class.  After working on battleship, and even after finishing these 2 projects in class, the passing of state and props started to coalesce for me, I was able to go back and refacture my code.