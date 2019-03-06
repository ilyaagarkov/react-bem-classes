import * as React from 'react';
import { Subtract } from 'utility-types';

import { block as blok } from './block';
import { element } from './element';
import { AllowedModifierList, PassedModifierHash } from './types';

export interface InjectedProps {
  bem: {
    block: (passedModifiers: PassedModifierHash) => string;
    element: (elementName: string, passedModifiers: PassedModifierHash) => string;
  };
}

interface Options {
  block: string;
  modifiers?: AllowedModifierList;
}

export const withBem = ({ block, modifiers }: Options) =>
  /* tslint:disable-next-line */
  <P extends InjectedProps>(Component: React.ComponentType<P>) => {
    return class ComponentWithBem extends React.Component<Subtract<P, InjectedProps>> {
      block = (passedModifiers: PassedModifierHash) =>
        blok({ passedModifiers, blockName: block, props: this.props, allowedModifiers: modifiers })

      element = (elementName: string, passedModifiers: PassedModifierHash) =>
        element({ elementName, passedModifiers, blockName: block })

      render() {
        return <Component
          {...this.props as P}
          bem={{
            block: this.block,
            element: this.element,
          }}
        />;
      }
    };
  };
