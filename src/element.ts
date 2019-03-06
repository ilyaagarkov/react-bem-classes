import { modifiersFromObj } from './util';
import { Config, PassedModifierHash } from './types';

interface Options {
  passedModifiers?: PassedModifierHash;
  blockName: Config['blockName'];
  elementName: string;
}

export const element = ({ blockName, passedModifiers = {}, elementName }: Options) => {
  const elementClass = `${blockName}__${elementName}`;
  const modifiersClasses = modifiersFromObj({
    baseClass: elementClass,
    modifiers: passedModifiers,
  });

  return [elementClass, ...modifiersClasses].join(' ');
};
