import { Field } from 'formik';
import { StepperProvider } from '../../Stepper';

const StepOne = () => {
  return (
    <div>
      <div>
        <h1>StepOne</h1>
      </div>
      <StepperProvider.FormContainer
        initialValues={{ firstName: '', lastName: '' }}
      >
        <>
          <Field type="text" name="firstName" placeholder="first name" />
          <Field type="text" name="lastName" placeholder="last name" />
        </>
      </StepperProvider.FormContainer>
    </div>
  );
};

export { StepOne };
