# react-bem-classes

Use [React](https://facebook.github.io/react/) components with classes naming convention by [BEM](https://en.bem.info/)

## Instalation
> npm install react-bem-classes --save-dev

## Usage

```js
import React from 'react';
import 'bem' from 'react-bem-classes';


//with decorator
@bem({
  block: 'user', // name of your block
  modifiers: ['type', 'status'] // list modifiers available [through props](#Modifiers through props)
})
class User extends React.Comoponent{

  render(){
    return(
      <div className={this.block()}>   // => <div class="user"></div>
        <div className={this.element('name')}>Joe</div>  // => <div class="user__name"></div>
        <div className={this.element('status')}>online</div>  // => <div class="user_status"></div>
      </div>
    )
  }
  
}

export default User;
```

```js
//without decorators

class User extends React.Comoponent{
   // ... 
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

## Modifiers through props

