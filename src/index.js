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

module.exports = options => Component => {

  console.log('Component', Component)

  const {block, modifiers} = options;
  console.log(Component.prototype)

  Component.prototype.block = function(passed = {}){
    let classesSet = [];
    if(this.props.className){
      classesSet.push(this.props.className);
    }

    classesSet.push(block);

    const
        modifiersFromProps = (modifiers || [])
            .filter(modifierName=>!!this.props[modifierName])
            .map(modifierName => createModifier(block, modifierName, this.props[modifierName])),
        modifiersFromArguments = modifiersFromObj(block, passed);

    classesSet.push(...modifiersFromProps, ...modifiersFromArguments);

    return classesSet.join(' ');
  };

  Component.prototype.element = function(element, modifiers){
    let classesSet = [];
    const
        elementClass = `${block}__${element}`,
        modifiersClasses = modifiersFromObj(elementClass, modifiers);

    classesSet.push(elementClass, ...modifiersClasses);
    return classesSet.join(' ');
  };

  return Component;

};
