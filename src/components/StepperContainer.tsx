import { StepperProvider } from './Stepper/StepperProvider';
import { IInitConfig } from './Stepper/types';

const StepperContainer = ({ config }: { config: IInitConfig }) => {
  return (
    <StepperProvider
      // Initialize the stepper with configuration from the factory.
      // This stepper will be configured based on 'STEPPER_ONE'.
      //   {...StepperFactory.createStepper(STEPPER.STEPPER_ONE).initConfig}
      {...config}
      onFinish={(values) => {
        alert('POGLEDATI LOG!!!');
        console.log('values', values);
      }}
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
