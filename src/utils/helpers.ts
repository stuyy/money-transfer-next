import {
  IoHomeOutline,
  IoBarChartOutline,
  IoCardOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { NavigationItem } from '../types';

export const getNavigationIcon = (item: NavigationItem) => {
  switch (item.type) {
    case 'dashboard':
      return IoHomeOutline;
    case 'activity':
      return IoBarChartOutline;
    case 'methods':
      return IoCardOutline;
    case 'settings':
      return IoSettingsOutline;
  }
};
