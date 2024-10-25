import { StepOne, StepThree, StepTwo } from '../../steppers';

import { IStepperProvider } from '../../Stepper';
import { IStepMap } from '../../Stepper/types';

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

export { StepperOne };
