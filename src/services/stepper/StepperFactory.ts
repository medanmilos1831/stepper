import { STEPPER } from '../../types';
import { StepperOne } from './StepperOne';
import { StepperTwo } from './StepperTwo';

export class StepperFactory {
  static createStepper(type: string) {
    switch (type) {
      case STEPPER.STEPPER_ONE:
        return new StepperOne();
      case STEPPER.STEPPER_TWO:
        return new StepperTwo();
      default:
        throw new Error('Unknown stepper type');
    }
  }
}
