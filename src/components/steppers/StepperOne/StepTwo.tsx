import { Field } from 'formik';
import { StepperProvider } from '../../Stepper';

const StepTwo = () => {
  return (
    <div>
      <div>
        <h1>StepTwo</h1>
      </div>
      <div>
        <StepperProvider.FormContainer initialValues={{ age: '', city: '' }}>
          <>
            <Field type="text" name="age" placeholder="age" />
            <Field type="text" name="city" placeholder="city" />
          </>
        </StepperProvider.FormContainer>
      </div>
    </div>
  );
};

export { StepTwo };
