import formStyles from '../../../styles/forms.module.scss';
import buttonStyles from '../../../styles/buttons.module.scss';
import { Button } from '../../buttons/Button';
import { LoginPasswordField } from './fields/LoginPasswordField';
import { LoginUsernameField } from './fields/LoginUsernameField';

export const LoginForm = () => {
  return (
    <form className={formStyles.registerLoginForm}>
      <LoginUsernameField />
      <LoginPasswordField />
      <Button className={buttonStyles.defaultButton}>Login</Button>
    </form>
  );
};
