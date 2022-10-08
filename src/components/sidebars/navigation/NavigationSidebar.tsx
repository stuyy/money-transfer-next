import { navigationItems } from '../../../utils/constants';
import styles from './index.module.scss';
import { NavigationSidebarItem } from './items/NavigationSidebarItem';

export const NavigationSidebar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navItemContainer}>
        {navigationItems.map((item) => (
          <NavigationSidebarItem key={item.type} item={item} />
        ))}
      </div>
    </nav>
  );
};
