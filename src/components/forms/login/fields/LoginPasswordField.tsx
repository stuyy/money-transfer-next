import inputStyles from '../../../../styles/input.module.scss';

export const LoginPasswordField = () => (
  <div className={inputStyles.inputContainer}>
    <div className={inputStyles.inputContainerHeader}>
      <div className={inputStyles.inputLabel}>
        <label htmlFor="password">Password</label>
      </div>
    </div>
    <input className={inputStyles.inputField} id="password" type="password" />
  </div>
);
