import { Field } from 'formik';
import { StepperProvider } from '../../Stepper';

const StepThree = () => {
  return (
    <div>
      <div>
        <h1>StepThree</h1>
      </div>
      <div>
        <StepperProvider.FormContainer
          initialValues={{ company: '', salary: '' }}
        >
          <>
            <Field type="text" name="company" placeholder="company" />
            <Field type="text" name="salary" placeholder="salary" />
          </>
        </StepperProvider.FormContainer>
      </div>
    </div>
  );
};

export { StepThree };
