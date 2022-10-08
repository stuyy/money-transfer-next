import { FC, PropsWithChildren } from 'react';
import { NavigationSidebar } from '../sidebars/navigation/NavigationSidebar';
import styles from './index.module.scss';

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.layout}>
    <NavigationSidebar />
    <main className={styles.main}>{children}</main>
  </div>
);
