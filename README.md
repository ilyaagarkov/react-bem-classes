# react-bem-classes

Use [React](https://facebook.github.io/react/) components with [BEM](https://en.bem.info/method/naming-convention/) class naming convention.

## Installation
> npm install react-bem-classes --save-dev

## Usage

```js
import React from 'react';
import 'bem' from 'react-bem-classes';


@bem({
  block: "list",  // name of your block
  modifiers: ['size', 'isOpened'] // list of modifiers available through props
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

## Modifiers
Methods this.block and this.elements may accept an additional parameter — an object of modifiers
 - `this.block(modifiers)`
 - `this.element(elementName, modifiers)`
 
Example 
```js
this.block({
  type: 'myType',
  isActive: true 
}) // returns 'list list--type-myType list--isActive'


```

## Modifiers through props
You can pass modifiers as props when using your component
```js

@bem({
  block: "list",  // name of your block
  modifiers: ['size', 'isOpened'] // list of modifiers available through props
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
  
  // renders <div class="list list--size-large list--isOpened">...</div>

}
```
## Both element and block
Every component can be a block and an element of another block at the same time.
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
      <User className={this.element('item')} />
    </div>
  }
  /* renders 
    <div class="list">
      <div className="list__item user">
    </div> 
  */ 
  
}


```
