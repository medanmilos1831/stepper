import { StepperFactory } from './services/index';
import { StepperContainer } from './StepperContainer';
import { STEPPER } from './types';

/**
 * Advance component demonstrating the use of multiple StepperProvider instances
 * for managing independent step-based workflows.
 *
 * Each stepper instance is configured separately using the StepperFactory,
 * which allows for modular and reusable step-based navigation. This component
 * shows how to render two stepper sequences side by side, each with its own
 * independent state and workflow.
 */
const Solutions = () => {
  return (
    <div>
      {/* Render the first stepper instance */}
      <div>
        <StepperContainer
          config={StepperFactory.createVehicle(STEPPER.STEPPER_ONE).initConfig}
        />
      </div>

      {/* Separator for visual distinction between steppers */}
      <br />
      <hr />
      <br />

      {/* Render the second stepper instance */}
      <StepperContainer
        config={StepperFactory.createVehicle(STEPPER.STEPPER_TWO).initConfig}
      />
    </div>
  );
};

export { Solutions };
