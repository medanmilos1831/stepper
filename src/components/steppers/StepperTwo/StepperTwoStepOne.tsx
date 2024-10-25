import { Field } from 'formik';
import { StepperProvider } from '../../Stepper';

const StepperTwoStepOne = () => {
  return (
    <div>
      <div>
        <h1>StepperTwoStepOne</h1>
      </div>
      <StepperProvider.FormContainer initialValues={{ car: '', color: '' }}>
        <>
          <Field type="text" name="car" placeholder="car" />
          <Field type="text" name="color" placeholder="color" />
        </>
      </StepperProvider.FormContainer>
    </div>
  );
};

export { StepperTwoStepOne };
