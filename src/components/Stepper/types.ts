import { ReactNode } from 'react';

export interface IStepperContext {
  activeView: string;
  setActiveView(): void;
  status: {
    currentPosition: number;
    totalSteps: number;
    nextStep: string | null;
    prevStep: string | null;
  };
  onSubmit: (obj: {
    value: any;
    activeView: string;
    nextStep: boolean;
  }) => void;
  Component: () => ReactNode;
}

export interface IStepperProvider
  extends Omit<
    IStepperContext,
    'Component' | 'status' | 'setActiveView' | 'activeView'
  > {
  initStep: string;
  stepMap: IStepMap;
  onFinish: () => void;
  onSubmit: (obj: {
    value: any;
    activeView: string;
    nextStep: boolean;
  }) => void;
}

export type StepperProvider = Omit<IStepperContext, 'Component'>;

export interface IStepMap {
  [key: string]: {
    value: any;
    renderView: () => ReactNode;
  };
}
