import { createModifier, modifiersFromObj } from './util';
import { Config, PassedModifierHash } from './types';

interface Options extends Config {
  passedModifiers: PassedModifierHash;
}

export const block = ({ blockName, props, passedModifiers, allowedModifiers }: Options) => {
  const classesSet = [] as string[];

  if (props.className) classesSet.push(props.className);

  classesSet.push(blockName);

  const modifiersFromProps = allowedModifiers
    .filter(modifierName => Boolean(props[modifierName]))
    .map(modifierName => createModifier({
      modifierName,
      modifierValue: props[modifierName],
      baseClass: blockName,
    }));

  const modifiersFromArguments = modifiersFromObj({
    baseClass: blockName,
    modifiers: passedModifiers,
  });

  classesSet.push(...modifiersFromProps, ...modifiersFromArguments);

  return classesSet.join(' ');
};
