import { StepOne, StepTwo, StepThree } from '../../components/steppers';
import { IInitConfig } from '../../components/Stepper';
import { IStepMap } from '../../components/Stepper/types';

class StepperOne {
  private stepMap: IStepMap = {
    stepOne: {
      value: null,
      renderView: StepOne,
    },
    stepTwo: {
      value: null,
      renderView: StepTwo,
    },
    stepThree: {
      value: null,
      renderView: StepThree,
    },
  };
  initConfig: IInitConfig = {
    initStep: 'stepOne',
    stepMap: this.stepMap,
  };
}

export { StepperOne };
