import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './index.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);
