"use strict";

function modifiersFromObj(baseClass, modifiers){
  let modifiersClasses = [];
  for(const modifier in modifiers){
    modifiersClasses.push(createModifier(baseClass, modifier, modifiers[modifier]));
  }
  return modifiersClasses;
}

function createModifier(baseClass, modifierName, modifierValue){
  if(!modifierValue || modifierValue === false) return '';
  let className = `${baseClass}--${modifierName}`;
  if(modifierValue && modifierValue !== true){
    className += `-${modifierValue}`;
  }
  return className;
}

function _block(blockName, props = {}, allowedModifiers = [], passedModifiers = {}) {

  const classesSet = [];

  (props.className &&  classesSet.push(props.className));

  classesSet.push(blockName);

  const
      modifiersFromProps = allowedModifiers
          .filter(modifierName=>!!props[modifierName])
          .map(modifierName => createModifier(blockName, modifierName, props[modifierName])),
      modifiersFromArguments = modifiersFromObj(blockName, passedModifiers);

  classesSet.push(...modifiersFromProps, ...modifiersFromArguments);

  return classesSet.join(' ');
}

function _element(blockName, elementName, passedModifiers = {}){

  const
      elementClass = `${blockName}__${elementName}`,
      modifiersClasses = modifiersFromObj(elementClass, passedModifiers);

  return [
    elementClass,
    ...modifiersClasses
  ].join(' ');
}

export default options => Component => {

  const {block, modifiers} = options;

  Object.assign(Component.prototype, {

    block(passedModifiers){ return _block.call(this, block, this.props, modifiers, passedModifiers) },

    element(elementName, passedModifiers){return _element.call(this, block, elementName, passedModifiers) }
  });

  return Component;
}

export class Bem {

  constructor(blockName, props = {}, allowedModifiers = []) {
    this.blockName = blockName;
    this.props = props;
    this.allowedModifiers = allowedModifiers;
  }

  block = (passedModifiers) => _block.call(null, this.blockName, this.props, this.allowedModifiers, passedModifiers)

  element = (elementName, passedModifiers) => _element.call(null, this.blockName, elementName, passedModifiers)

}


