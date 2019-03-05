import * as React from 'react';

import { block as blok } from './block';
import { element } from './element';
import { AllowedModifierList, PassedModifierHash } from './types';

interface Options {
  block: string;
  modifiers: AllowedModifierList;
}

/* tslint:disable-next-line */
export const withBem = <P extends object>({ block, modifiers }: Options) => (Component: React.ComponentType<P>) => {
  return class ComponentWithBem extends React.Component<P> {
    block = (passedModifiers: PassedModifierHash) =>
      blok({ passedModifiers, blockName: block, props: this.props, allowedModifiers: modifiers })

    element = (elementName: string, passedModifiers: PassedModifierHash) =>
      element({ elementName, passedModifiers, blockName: block })

    render() {
      return <Component {...this.props} />;
    }
  };
};
