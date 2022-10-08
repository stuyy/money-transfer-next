import { FC, PropsWithChildren } from 'react';
import { NextPageWithLayout } from '../../types';
import { NavigationSidebar } from '../sidebars/NavigationSidebar';

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <NavigationSidebar />
    <main>{children}</main>
  </>
);
