# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) ToDo List Exercise

## Review


So, we've gone through all of the basics of React. To really hammer it home with practice, let's walk through complete creation of an app. This will be a to-do list, keeping track of everything we need to do for the day (after we finish this!). It's a lot, so we're going to want it to be editable.

This is what our list will look like when we're finished:

![finished-list](./images/todo-list-finished.png)

Let's get started!


* Fork & Clone

Use `npm start` to start a server that will serve your new React application!


```sh
npm start
```

* Check it out! If you browse to http://localhost:3000, you should have a fresh react app.

* Make sure that as you go, you frequently check the site to ensure your changes are all reflecting accurately!

## Set up App.js for a class component.

Let's name the component in `App.js` to something more meaningful, like `MyList`. Also change the name of the file from `App.js` to `MyList.js`, since best practices include keeping the file name the same as the component it contains as often as possible.

Then, we'll replace the functional component with a class component and put the appropriate import statement at the top.

```js
import React, { Component } from 'react'
import './App.css'

class MyList extends Component {
  render() {
    return ()
  }
}

export default MyList
```

## Fix index.js to display MyList.

Change the name of the component where it's rendered in index.js! You'll also have to change the `import` statement in `index.js`, since you changed the name of the file containing the component that `index.js` is importing from!

`index.js` now looks like this:


```js
import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

ReactDOM.render(
  <MyList />,
  document.getElementById('root')
)

```

## Set up the basic list.

Now change the contents of the HTML to have a header and the start of a list.

This looks like:

```js
import React, { Component } from 'react'
import './App.css'

class MyList extends Component {
  render() {
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          <li></li>
        </ul>
      </div>
    )
  }
}

export default MyList
```

Now, our webpage displays an empty list.

We've learned that we should make new files for each component and that different functionalities should be split into different components.

Let's make a component for `ListItem`s. This component can simply render  `<li>Make the list!</li>` so that we are starting with something in this list.

* Remember to use an `export` statement at the end of the new file to make the code in this file available elsewhere in our application.

* Don't forget to import your `ListItem` component into `MyList.js`.  Then, include the component in what `MyList` renders with `<ListItem />` under the existing header (in place of the existing list item)!

**ListItem.js**
```js
import React, { Component } from 'react'
import './App.css'

class ListItem extends Component {
  render() {
    return(<li>Make the list!</li>)
  }
}

export default ListItem
```

**MyList.js**
```js
import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    return(<div>
      <h1>Things I should stop procrastinating:</h1>
      <ul>
        <ListItem />
      </ul>
    </div>)
  }
}

export default MyList
```

At this point, our app looks like this:

![list-preview](./images/todo-list-1.png)

## Side note - let's quickly format it a little more nicely!

Since we'll be looking at this for a while, let's make it less of an eyesore. Feel free to change the `index.css` file to include anything you'd like; on mine, I've centered the text and given it a light green background. You can grab mine [here](images/index.css).

## Second, props.

This is a great start - we've already nested components (`ListItem` inside of `MyList`). Now, let's add some props to make this useful and check that current list item off!

Let's first just pass a prop into `ListItem` from `MyList`. We'll call the prop something simple, like `doThis`. I'm pretty hungry; I'll pass in a value of "buy ice cream."

Then, in `ListItem`, we'll add a list item that uses the `doThis` prop instead of the existing hard-coded text.

Now, we have in `MyList.js`:
```js
import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          <ListItem task="Buy ice cream" />
        </ul>
      </div>
    )
  }
}

export default MyList
```

Now that we've passed in a prop to `ListItem`, we need to call it in `ListItem.js`
using `this.props`

`ListItem.js` will now look like this:
```js
import React, { Component } from 'react'
import './App.css'

class ListItem extends Component {
  render() {
    return (
      <div>
        <li>{this.props.task}</li>
      </div>
    )
  }
}

export default ListItem
```

Our app now looks like this:
![list-preview](./images/todo-list-2.png)


## Third, render different items in an array.

If we want to make this a truly extensible list, we could create an array of items, pass them into props through the `ListItem` component, and then render each item. Let's do that now.

Borrowing from a bonus exercise earlier, the easiest way to do this is by using the `map` function. A map is like a `for` loop. With `map`, you make a new variable and iterate through each item in an array with it. It looks like this:


```js
let newArray = oldArray.map((item, index) => {
  /* how to change each item in the array */
})
```

Here's a simple example that makes a new array by adding an `!` to each element of an array.
```js
const phrases = ['ice cream', 'dinosaurs', 'hobbits']
let excitedPhrases = phrases.map( (phrase, index) => {
  return newPhrase = phrase + '!'
})
// excitedPhrases is ["ice cream!", "dinosaurs!", "hobbits!"]
```
> Note that in the above example, moustaches are used after the arrow rather than the open parentheses in the earlier example.
In ES6, with arrow functions, you can omit the curly brackets and `return` keyword if the return value can be written as a single statement. In the same way that we `return` a single HTML element in a component's `render()` function, we can place this single-statement return value in parentheses and make use of line-breaks without confusing javascript.

##### Plan

* In the `MyList` component, have an array of items for the list—uncreatively called `theList`—that is passed down from `index.js` in the form of a prop
* Create a variable to refer to the new array output by the `map` method, uncreatively but helpfully called `todoItems`.
* Use `map` to iterate through the `todoItems` array, one `item` (this could be any name you'd like) at a time, and use each one to create a `ListItem` component in the `todoItems` list.
* We can later refer to this list by just calling the variable in JSX (like any other variable).  For example, we could say  `{todoItems}`.

##### Implementing the Plan

First, let's make our list in `index.js`. Make an array of strings that represent your todo items. 
Fill it with what you need to do for the day. Once you've done that, pass that array into your
`<MyList />` component.

Your `index.js` should look something like this:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["Listen to Hot Mulligan", "Drink hot cocoa", "Eat hot cheetos"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)
```

The next step is to use the `map` function to create an array of `<ListItem />`s, each with 
its own `doThis` prop that represents a todo item from `theList`.


Here is the `map` function call that will do this for us, which we'll put in the `MyList` component:
```js
let todoItems = this.props.theList.map((item, index) => (
  <ListItem task={item} key={index} />
))
```
The last step is to call the `todoItems` in the render function of `MyList` class.

My final `MyList` component class looks like this:
```js
class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => {
      return <ListItem task={item} key={index} />
    })
    
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    )
  }
}
```

And the final `ListItem.js`, which hasn't changed:
```js
import React, { Component } from 'react';
import './App.css';

class ListItem extends Component {
  render() {
    return (
      <div>
        <li>{this.props.task}</li>
      </div>
    )
  }
}

export default ListItem

```

Now what we have is:
![list-preview](./images/todo-list-3.png)
