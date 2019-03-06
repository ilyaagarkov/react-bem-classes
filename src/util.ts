import { PassedModifierHash } from './types';

interface CreateModifierOptions {
  baseClass: string;
  modifierName: string;
  modifierValue: string | boolean;
}

export const createModifier = ({ baseClass, modifierName, modifierValue }: CreateModifierOptions) => {
  if (!modifierValue || modifierValue === false) return '';

  let className = `${baseClass}--${modifierName}`;
  if (modifierValue && typeof modifierValue === 'string') className += `-${modifierValue}`;

  return className;
};

interface ModifiersFromObjOptions {
  baseClass: string;
  modifiers: PassedModifierHash;
}

export const modifiersFromObj = ({ baseClass, modifiers }: ModifiersFromObjOptions) =>
  Object.keys(modifiers)
    .map(modifierName =>
      createModifier({
        baseClass,
        modifierName,
        modifierValue: modifiers[modifierName],
      }),
    );
