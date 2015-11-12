# react-bem-classes

Use [React](https://facebook.github.io/react/) components with classes naming convention by [BEM](https://en.bem.info/)

## Getting Started 

### Instalation
> npm install react-bem-classes --save-dev

### Usage

```js
import React from 'react';
import 'bem' from 'react-bem-classes';


//with decorator
@bem({
  block: 'user',
  modifiers: ['type']
})
class User extends React.Comoponent{

  render(){
    return(
      <div className={this.block()}>
        <div className={this.element('name')}>Joe</div>
        <div className={this.element('status')}>online</div>
      </div>
    )
  }
  
}

export default User;
```

```js
//without decorators

class User extends React.Comoponent{

  render(){
    return(
      <div className={this.block()}>
        <div className={this.element('name')}>Joe</div>
        <div className={this.element('status')}>online</div>
      </div>
    )
  }
  
}

bem(User, 
  block: 'user',
  modifiers: ['type']
})

export default User;

//or
export default bem(User, 
  block: 'user',
  modifiers: ['type']
})

```
