import {
  StepperTwoStepOne,
  StepperTwoStepTwo,
} from '../../components/steppers/StepperTwo';

import { IStepperProvider } from '../../components/Stepper';
import { IStepMap } from '../../components/Stepper/types';

class StepperTwo {
  private stepMap: IStepMap = {
    stepOne: {
      value: null,
      renderView: StepperTwoStepOne,
    },
    stepTwo: {
      value: null,
      renderView: StepperTwoStepTwo,
    },
  };

  initConfig: IStepperProvider = {
    initStep: 'stepOne',
    stepMap: this.stepMap,
  };
}

export { StepperTwo };
