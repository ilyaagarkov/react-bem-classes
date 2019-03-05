import * as React from 'react';

export type AllowedModifierList = string[];
export interface PassedModifierHash {
  [name: string]: string;
}

export interface Config {
  blockName: string;
  props: {
    className?: React.HtmlHTMLAttributes<any>['className'];
    [key: string]: any;
  };
  allowedModifiers: string[];
}
