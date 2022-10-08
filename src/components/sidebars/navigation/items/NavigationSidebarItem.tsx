import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { NavigationItem } from '../../../../types';
import { getNavigationIcon } from '../../../../utils/helpers';
import styles from './index.module.scss';

type Props = {
  item: NavigationItem;
};

export const NavigationSidebarItem: FC<Props> = ({ item }) => {
  const router = useRouter();
  const Icon = getNavigationIcon(item);
  const isRouteActive = router.pathname === item.pathname;
  return (
    <Link href={item.pathname}>
      <a>
        <Icon
          size={36}
          className={`${styles.icon} ${isRouteActive && styles.active}`}
        />
      </a>
    </Link>
  );
};
