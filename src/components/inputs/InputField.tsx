import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  label: string;
  id: string;
};

export const InputField: FC<Props> = ({ id, label }) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputContainerHeader}>
        <div className={styles.inputLabel}>
          <label htmlFor={id}>{label}</label>
        </div>
        <div className={styles.inputError}></div>
      </div>
      <input className={styles.inputField} id={id} />
    </div>
  );
};
