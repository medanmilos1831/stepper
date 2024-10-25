import { StepperProvider } from './Stepper/StepperProvider';
import { IStepperProvider } from './Stepper/types';

const StepperContainer = ({ config }: { config: IStepperProvider }) => {
  return (
    <StepperProvider
      // Initialize the stepper with configuration from the factory.
      // This stepper will be configured based on 'STEPPER_ONE'.
      //   {...StepperFactory.createVehicle(STEPPER.STEPPER_ONE).initConfig}
      {...config}
    >
      <StepperProvider.ViewContainer>
        {({ Component }) => {
          // Render the React component corresponding to the current step.
          // The `Component` dynamically updates based on the current active step.
          return <Component />;
        }}
      </StepperProvider.ViewContainer>
    </StepperProvider>
  );
};

export { StepperContainer };
