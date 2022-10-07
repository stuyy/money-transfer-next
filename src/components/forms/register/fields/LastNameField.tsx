import { FC } from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { RegisterFormFields } from '../../../../types/form-fields';
import inputStyles from '../../../../styles/input.module.scss';

type Props = {
  register: UseFormRegister<RegisterFormFields>;
  error?: FieldError;
};

export const LastNameField: FC<Props> = ({ register, error }) => (
  <div className={inputStyles.inputContainer}>
    <div className={inputStyles.inputContainerHeader}>
      <div className={inputStyles.inputLabel}>
        <label htmlFor="lastName">Last Name</label>
      </div>
      {error && <div className={inputStyles.inputError}>{error.message}</div>}
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
);
