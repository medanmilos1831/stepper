import { StepperFactory } from '../services';
import { StepperContainer } from '../components/StepperContainer';
import { STEPPER } from '../types';

function App() {
  return (
    <div>
      {/* Render the first stepper instance */}
      <div>
        <StepperContainer
          config={StepperFactory.createStepper(STEPPER.STEPPER_ONE).initConfig}
        />
      </div>

      {/* Separator for visual distinction between steppers */}
      <br />
      <hr />
      <br />

      {/* Render the second stepper instance */}
      <StepperContainer
        config={StepperFactory.createStepper(STEPPER.STEPPER_TWO).initConfig}
      />
    </div>
  );
}

export { App };
