import { StepOne, StepThree, StepTwo } from '../../Solutions/steppers';
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
    onFinish: () => {
      const values = Object.keys(this.stepMap).map(
        (key) => this.stepMap[key].value
      );
      alert(`Pogledati log!`);
      console.log('onFinish', values);
    },
    onSubmit: ({ value, activeView, nextStep }) => {
      this.stepMap[activeView].value = value;
      if (!nextStep) {
        this.initConfig.onFinish();
      }
    },
  };
}

export { StepperTwo };
