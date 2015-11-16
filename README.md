# react-bem-classes

Use [React](https://facebook.github.io/react/) components with classes naming convention by [BEM](https://en.bem.info/method/naming-convention/)

## Instalation
> npm install react-bem-classes --save-dev

## Usage

```js
import React from 'react';
import 'bem' from 'react-bem-classes';


//with decorator

@bem({
  block: "list",  // name of your block
  modifiers: ['size', 'isOpened'] // list modifiers available through props
})
class List extends React.Component{

  render(){

    return(
      <div className={this.block()}>  // <div class="list"></div>
        <div className={this.element('item')}></div>  //  <div class="list__item"></div>
      </div>
    )
  }
}

export default List;
```

```js
//without decorators

class List extends React.Component{
   // ... 
}

bem(User, 
  block: "list", 
  modifiers: ['size'] 
})

export default User;

//or
export default bem(User, 
  block: "list", 
  modifiers: ['size'] 
})
```
## Modifiers
Methods this.block and this.elements may accept additional a parameter with modifiers
 - `this.block(modifiers)`
 - `this.element(elementName, modifiers)`
 
Example 
```js
this.block({
  type: 'myType',
  isActive: true 
}) // return 'list list--type-myType list--isActive'


```

## Modifiers through props
You can pass modifiers as props when you are using your component
```js

@bem({
  block: "list",  // name of your block
  modifiers: ['size', 'isOpened'] // list modifiers available through props
})
class List extends React.Component{

  render(){

    return(
      <div className={this.block()}>
        //...
      </div>
    )
  }
}

class MyApp extends React.Component{

  render(){
    return <List size="large" isOpened /> 
  }
  
  // rendered <div class="list list--size-large list--isOpened">...</div>

}
```
## Both element and block
```js
@bem({
  block: 'user'
})
class User extends React.Component{
  render(){
    return(
      <div className={this.block()}>
      </div>
    )
  }
}

@bem({
  block: 'list'
})
class List extends React.Component{

  render(){
    <div className={this.block()}>
      <div className={this.element('item')}></div>
    </div>
  }
  /* rendered 
    <div class="list">
      <div className="list__item user">
    </div> 
  */ 
  
}


```
