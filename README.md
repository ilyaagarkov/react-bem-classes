# react-bem-classes

Use [React](https://facebook.github.io/react/) components with [BEM](https://en.bem.info/method/naming-convention/) class naming convention.

## Installation
> npm install react-bem-classes

## API
- **`withBem`** — React HOC which propagates the following props to the wrapped component:
```ts
interface Modifiers {
  [name: string]: string | boolean;
}

interface PropagatedProps {
  bem: {
    block: (modifiers?: Modifiers) => string;
    element: (elementName: string, modifiers: Modifiers) => string;
  };
}
```
- **`bem`** — library-agnostic `BEM` implementation.
- This library also exports `typescript` type definitions. See the full export list in [here](./src/index.ts).


## Usage
```ts
import React from 'react';
import { withBem } from 'react-bem-classes';

@withBem({
  block: 'list',  // name of your block
  modifiers: ['size', 'isOpened'] // list of modifiers available through props
})
class List extends React.Component {
  render(){
    const { bem } = this.props;
  
    return(
      <div className={bem.block()}>  // <div class="list"></div>
        <div className={bem.element('item')}></div>  //  <div class="list__item"></div>
      </div>
    )
  }
}

export default List;
```

## Examples

### With `modifiers`
```ts
bem.block({
  type: 'myType',
  isActive: true 
})

// returns 'list list--type-myType list--isActive'
```

### `modifiers` passed through props
You can simply pass modifiers as normal `props`.
```ts
import React from 'react';
import { withBem } from 'react-bem-classes';

@withBem({
  block: 'list',  // name of your block
  modifiers: ['size', 'isOpened'] // list of modifiers available through props
})
class List extends React.Component {
  render(){
    const { bem } = this.props;
    
    return (
      <div className={bem.block()} />
    )
  }
}

class MyApp extends React.Component {
  render(){
    return <List size="large" isOpened /> 
  }
  // renders <div class="list list--size-large list--isOpened">...</div>
}
```

### Both element and block

Every component can be a **block** and an **element** of another block at the same time.

```ts
import React from 'react';
import { withBem } from 'react-bem-classes';

@withBem({
  block: 'user'
})
class User extends React.Component {
  render(){
    const { bem } = this.props;

    return (
      <div className={bem.block()} />
    )
  }
}

@withBem({
  block: 'list'
})
class List extends React.Component {

  render(){
    const { bem } = this.props;
    
    return (
      <div className={bem.block()}>
        <User className={bem.element('item')} />
      </div>
    )
  }
  
  /*  
  <div class="list">
    <div className="list__item user">
  </div> 
  */ 
  
}
```
