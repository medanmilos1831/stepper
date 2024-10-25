import { createContext } from 'react';
import { IStepperContext } from './types';

const StepperContext = createContext<IStepperContext | undefined>(undefined);

export { StepperContext };
