import { Config, PassedModifierHash } from './types';
import { block } from './block';
import { element } from './element';

export const bem = ({ blockName, props, allowedModifiers }: Config) => ({
  block: (passedModifiers?: PassedModifierHash) =>
    block({ blockName, props, passedModifiers, allowedModifiers }),

  element: (elementName: string, passedModifiers?: PassedModifierHash) =>
    element({ blockName, elementName, passedModifiers }),
});
