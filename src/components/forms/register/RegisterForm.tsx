import { useForm } from 'react-hook-form';
import { RegisterFormFields } from '../../../types/form-fields';
import { Button } from '../../buttons/Button';
import { FirstNameField } from './fields/FirstNameField';
import { LastNameField } from './fields/LastNameField';
import { RegisterUsernameField } from './fields/RegisterUsernameField';
import { RegisterPasswordField } from './fields/RegisterPasswordField';
import styles from './index.module.scss';
import buttonStyles from '../../../styles/buttons.module.scss';
import formStyles from '../../../styles/forms.module.scss';
export const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormFields>();

  const onSubmit = (data: RegisterFormFields) => {
    console.log(data);
  };

  return (
    <form
      className={formStyles.registerLoginForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={formStyles.formNameContainer}>
        <FirstNameField register={register} error={errors.firstName} />
        <LastNameField register={register} error={errors.lastName} />
      </div>
      <RegisterUsernameField register={register} error={errors.username} />
      <RegisterPasswordField register={register} error={errors.password} />
      <Button className={buttonStyles.defaultButton}>Create Account</Button>
    </form>
  );
};
