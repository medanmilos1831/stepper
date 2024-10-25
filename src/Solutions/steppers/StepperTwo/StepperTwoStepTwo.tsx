import { Field } from 'formik';
import { StepperProvider } from '../../Stepper';

const StepperTwoStepTwo = () => {
  return (
    <div>
      <div>
        <h1>StepperTwoStepTwo</h1>
      </div>
      <div>
        <StepperProvider.FormContainer
          initialValues={{ seats: '', lights: '' }}
        >
          <>
            <Field type="text" name="seats" placeholder="seats" />
            <Field type="text" name="lights" placeholder="lights" />
          </>
        </StepperProvider.FormContainer>
      </div>
    </div>
  );
};

export { StepperTwoStepTwo };
