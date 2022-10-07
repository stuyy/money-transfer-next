import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { RegisterFormFields } from '../../../types/form-fields';
import { Button } from '../../buttons/Button';
import styles from './index.module.scss';
import inputStyles from '../../../styles/input.module.scss';

export const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormFields>();

  console.log(errors);
  const onSubmit = (data: RegisterFormFields) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.nameContainer}>
        <div className={inputStyles.inputContainer}>
          <div className={inputStyles.inputContainerHeader}>
            <div className={inputStyles.inputLabel}>
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className={inputStyles.inputError}></div>
          </div>
          <input
            className={inputStyles.inputField}
            id="firstName"
            {...register('firstName', {
              required: 'Required',
              maxLength: {
                value: 32,
                message: '32 Characters Max',
              },
              minLength: {
                value: 2,
                message: '2 Characters Min',
              },
            })}
          />
        </div>
        <div className={inputStyles.inputContainer}>
          <div className={inputStyles.inputContainerHeader}>
            <div className={inputStyles.inputLabel}>
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className={inputStyles.inputError}></div>
          </div>
          <input
            className={inputStyles.inputField}
            id="lastName"
            {...register('lastName', {
              required: 'Required',
              maxLength: {
                value: 32,
                message: '32 Characters Max',
              },
              minLength: {
                value: 2,
                message: '2 Characters Min',
              },
            })}
          />
        </div>
      </div>
      <div className={inputStyles.nameContainer}>
        <div className={inputStyles.inputContainer}>
          <div className={inputStyles.inputContainerHeader}>
            <div className={inputStyles.inputLabel}>
              <label htmlFor="username">Username</label>
            </div>
            <div className={inputStyles.inputError}></div>
          </div>
          <input
            className={inputStyles.inputField}
            id="username"
            {...register('username', {
              required: 'Required',
              maxLength: {
                value: 32,
                message: '32 Characters Max',
              },
              minLength: {
                value: 3,
                message: '3 Characters Min',
              },
            })}
          />
        </div>
      </div>
      <div className={inputStyles.nameContainer}>
        <div className={inputStyles.inputContainer}>
          <div className={inputStyles.inputContainerHeader}>
            <div className={inputStyles.inputLabel}>
              <label htmlFor="password">Password</label>
            </div>
            <div className={inputStyles.inputError}></div>
          </div>
          <input
            className={inputStyles.inputField}
            id="password"
            type="password"
            {...register('password', {
              required: 'Required',
              maxLength: {
                value: 32,
                message: '32 Characters Max',
              },
              minLength: {
                value: 8,
                message: '8 Characters Min',
              },
            })}
          />
        </div>
      </div>
      <Button className={styles.button}>Create Account</Button>
    </form>
  );
};
