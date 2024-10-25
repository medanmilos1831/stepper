import { Form, Formik } from 'formik';
import { PropsWithChildren, ReactNode, useContext, useState } from 'react';
import { StepperContext } from './StepperContext';
import { IStepperContext, IStepperProvider } from './types';

/**
 * StepperProvider component for managing step-based navigation.
 *
 * @param {PropsWithChildren<IStepperProvider>} props - The props for the component.
 * @param {ReactNode} props.children - The child components that will have access to the stepper context.
 * @param {string} props.initStep - The initial step to be active when the stepper is rendered.
 * @param {IStepMap} props.stepMap - The mapping of steps with their respective views and values.
 * @param {Function} props.onSubmit - Callback function triggered when the stepper form is submitted.
 * @returns {ReactNode} The Stepper context provider wrapping child components.
 */
const StepperProvider = ({
  children,
  initStep,
  stepMap,
  onSubmit,
}: PropsWithChildren<IStepperProvider>) => {
  const [activeView, setActiveView] = useState<string>(initStep);
  const steps = Object.keys(stepMap);
  const totalSteps = steps.length;
  const currentPosition = steps.findIndex((step) => step === activeView);
  return (
    <StepperContext.Provider
      value={{
        activeView,
        setActiveView() {
          if (this.status.nextStep) {
            setActiveView(this.status.nextStep);
            return;
          }
          setActiveView(steps[0]);
        },
        status: {
          currentPosition,
          totalSteps,
          nextStep:
            currentPosition === steps.length
              ? null
              : steps[currentPosition + 1],
          prevStep: currentPosition === 0 ? null : steps[currentPosition - 1],
        },
        onSubmit,
        Component: stepMap[activeView].renderView,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};

/**
 * StepperProvider.ViewContainer component for accessing stepper context.
 *
 * @param {Object} props - The props for the ViewContainer.
 * @param {(props: IStepperContext) => ReactNode} props.children - A render prop function that receives stepper context as argument.
 * @returns {ReactNode} Rendered children with access to stepper context.
 */
StepperProvider.ViewContainer = ({
  children,
}: {
  children: (props: IStepperContext) => ReactNode;
}) => {
  const ctx = useContext(StepperContext)!;
  return <>{children(ctx)}</>;
};

/**
 * StepperProvider.FormContainer component for rendering form within stepper.
 *
 * @param {PropsWithChildren<{ initialValues: any }>} props - The props for the FormContainer.
 * @param {any} props.initialValues - Initial form values.
 * @param {ReactNode} props.children - Form content to be rendered within Formik's form.
 * @returns {ReactNode} The form wrapped with Formik, handling stepper submission.
 */
StepperProvider.FormContainer = ({
  children,
  initialValues,
}: PropsWithChildren<{ initialValues: any }>) => {
  const context = useContext(StepperContext)!;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(value) => {
        context.onSubmit({
          value,
          activeView: context.activeView,
          nextStep: !!context.status.nextStep,
        });
        context.setActiveView();
      }}
    >
      <Form>
        {children}
        <button type="submit">
          {context.status.nextStep ? 'Save and continue' : 'Submit'}
        </button>
      </Form>
    </Formik>
  );
};

export { StepperProvider };
