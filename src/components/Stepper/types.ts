import { ReactNode } from 'react';

export interface IStepperContext extends Omit<IStepperProvider, 'initStep'> {
  activeView: string;
  setActiveView(): void;
  status: {
    currentPosition: number;
    totalSteps: number;
    nextStep: string | null;
    prevStep: string | null;
  };
  Component: () => ReactNode;
}

export interface IStepperProvider extends IInitConfig {
  onFinish: (values: any) => void;
}

export interface IInitConfig {
  initStep?: string;
  stepMap: IStepMap;
}

export type StepperProvider = Omit<IStepperContext, 'Component'>;

export interface IStepMap {
  [key: string]: {
    value: any;
    renderView: () => ReactNode;
  };
}
