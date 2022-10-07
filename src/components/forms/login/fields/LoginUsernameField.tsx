import inputStyles from '../../../../styles/input.module.scss';

export const LoginUsernameField = () => (
  <div className={inputStyles.inputContainer}>
    <div className={inputStyles.inputContainerHeader}>
      <div className={inputStyles.inputLabel}>
        <label htmlFor="username">Username</label>
      </div>
    </div>
    <input className={inputStyles.inputField} id="username" />
  </div>
);
