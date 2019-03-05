import * as React from 'react';

import { block as blok } from './block';
import { element } from './element';
import { AllowedModifierList, PassedModifierHash } from './types';

interface InjectedProps {
  bem: {
    block: (passedModifiers: PassedModifierHash) => string;
    element: (elementName: string, passedModifiers: PassedModifierHash) => string;
  };
}

interface Options {
  block: string;
  modifiers: AllowedModifierList;
}

export const withBem = <P extends InjectedProps>({ block, modifiers }: Options) =>
  /* tslint:disable-next-line */
  (Component: React.ComponentType<P>) => {
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
